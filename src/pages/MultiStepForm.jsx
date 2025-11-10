import React, { useState } from "react";
import Layout from "../components/layout";
import StepIndicator from "../components/multistep/StepIndicator";
import PersonalInfoStep from "../components/multistep/PersonalInfoStep";
import ServiceInfoStep from "../components/multistep/ServiceInfoStep";
import BenefitsInfoStep from "../components/multistep/BenefitsInfoStep";
import SubmissionSuccess from "../components/multistep/SubmissionSuccess";

/**
 * Multi-step form page using react-jsonschema-form with VA Design System components
 * Demonstrates creating a wizard-like interface with multiple form steps
 * Uses custom VA Design System widgets for the form controls
 * Now refactored into smaller, modular step components
 */
const MultiStepForm = () => {
  // State to track the current step
  const [step, setStep] = useState(0);
  // State to store form data across steps
  const [formData, setFormData] = useState({});
  // State for submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define the steps with their metadata
  const steps = [
    { title: "Personal Information" },
    { title: "Service Information" },
    { title: "Benefits Information" },
  ];

  // Benefits step schema for passing to BenefitsInfoStep
  const benefitsSchema = {
    type: "object",
    properties: {
      requestedBenefits: {
        type: "array",
        title: "Requested Benefits",
        items: {
          type: "string",
          enum: [
            "Health Care",
            "Education and Training",
            "Disability Compensation",
            "Home Loans",
            "Life Insurance",
            "Pension",
            "Employment Services",
          ],
        },
        uniqueItems: true,
      },
      priorityLevel: {
        type: "string",
        title: "Priority Level",
        enum: ["High", "Medium", "Low"],
        default: "Medium",
      },
      additionalInformation: {
        type: "string",
        title: "Additional Information",
      },
    },
    required: ["requestedBenefits"],
  };

  // Handle moving to the next step
  const handleNext = ({ formData: stepData }) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  // Handle moving to the previous step
  const handlePrevious = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  // Handle form submission (on last step)
  const handleSubmit = ({ formData: stepData }) => {
    const finalFormData = { ...formData, ...stepData };
    setFormData(finalFormData);
    setIsSubmitted(true);
    // In a real application, you would submit this data to an API
    console.log("Form submitted with data:", finalFormData);
  };

  // Reset the form to start over
  const handleReset = () => {
    setStep(0);
    setFormData({});
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  };

  // Render the current step component
  const renderStep = () => {
    switch (step) {
      case 0:
        return <PersonalInfoStep formData={formData} onNext={handleNext} />;
      case 1:
        return (
          <ServiceInfoStep
            formData={formData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        );
      case 2:
        return (
          <BenefitsInfoStep
            formData={formData}
            stepSchema={benefitsSchema}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Layout title="Multi-step Form">
      <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
        Multi-step Form
      </h1>

      <va-alert
        close-btn-aria-label="Close notification"
        status="info"
        visible
        class="vads-u-margin-bottom--4"
      >
        <h2
          id="multi-step-form-headline"
          slot="headline"
          className="vads-u-font-family--sans"
        >
          React JSON Schema Form Example
        </h2>
        <p className="vads-u-margin-y--0 vads-u-font-family--sans">
          This page demonstrates a multi-step form using{" "}
          <va-link
            href="https://github.com/department-of-veterans-affairs/react-jsonschema-form"
            text="react-jsonschema-form"
          />
          , which allows creating forms from JSON schemas.
        </p>
      </va-alert>

      {!isSubmitted ? (
        <div className="vads-u-margin-bottom--6">
          <StepIndicator steps={steps} currentStep={step} />
          {renderStep()}
        </div>
      ) : (
        <SubmissionSuccess formData={formData} onReset={handleReset} />
      )}
    </Layout>
  );
};

export default MultiStepForm;
