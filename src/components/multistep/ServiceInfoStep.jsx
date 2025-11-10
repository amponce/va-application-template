import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { widgets } from "../va-form-widgets";

/**
 * Service Information Step Component
 * Second step of the multi-step form collecting service information
 *
 * @param {Object} props - Component props
 * @param {Object} props.formData - Current form data
 * @param {Function} props.onNext - Callback when moving to next step
 * @param {Function} props.onPrevious - Callback when moving to previous step
 */
const ServiceInfoStep = ({ formData, onNext, onPrevious }) => {
  const schema = {
    type: "object",
    required: ["serviceType", "serviceStatus"],
    properties: {
      serviceType: {
        type: "string",
        title: "Service Type",
        enum: ["Army", "Navy", "Air Force", "Marines", "Coast Guard", "Space Force"],
      },
      serviceStatus: {
        type: "string",
        title: "Current Status",
        enum: ["Active Duty", "Veteran", "Retired", "Reserve", "National Guard"],
      },
      serviceStartDate: {
        type: "string",
        title: "Service Start Date",
        format: "date",
      },
      serviceEndDate: {
        type: "string",
        title: "Service End Date (if applicable)",
        format: "date",
      },
    },
  };

  const uiSchema = {
    "ui:classNames": "va-form-step",
    serviceType: {
      "ui:widget": "select",
      "ui:placeholder": "-- Select Service Type --",
      "ui:errorMessages": {
        required: "Please select a service type",
      },
    },
    serviceStatus: {
      "ui:widget": "select",
      "ui:placeholder": "-- Select Status --",
      "ui:errorMessages": {
        required: "Please select your current status",
      },
    },
    serviceStartDate: {
      "ui:widget": "date",
    },
    serviceEndDate: {
      "ui:widget": "date",
    },
  };

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      validator={validator}
      formData={formData}
      onSubmit={onNext}
      className="rjsf-form vads-u-margin-bottom--4"
      widgets={widgets}
    >
      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap vads-u-margin-top--4">
        <button
          type="button"
          onClick={onPrevious}
          className="usa-button-secondary usa-button vads-u-margin-right--2"
        >
          Previous
        </button>
        <button type="submit" className="usa-button">
          Next
        </button>
      </div>
    </Form>
  );
};

export default ServiceInfoStep;
