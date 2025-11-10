import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { widgets } from "../va-form-widgets";

/**
 * Personal Information Step Component
 * First step of the multi-step form collecting personal information
 *
 * @param {Object} props - Component props
 * @param {Object} props.formData - Current form data
 * @param {Function} props.onNext - Callback when moving to next step
 */
const PersonalInfoStep = ({ formData, onNext }) => {
  const schema = {
    type: "object",
    required: ["firstName", "lastName", "email"],
    properties: {
      firstName: {
        type: "string",
        title: "First Name",
      },
      lastName: {
        type: "string",
        title: "Last Name",
      },
      email: {
        type: "string",
        title: "Email Address",
        format: "email",
      },
      phone: {
        type: "string",
        title: "Phone Number",
      },
    },
  };

  const uiSchema = {
    "ui:classNames": "va-form-step",
    firstName: {
      "ui:autofocus": true,
      "ui:placeholder": "Enter your first name",
    },
    lastName: {
      "ui:placeholder": "Enter your last name",
    },
    email: {
      "ui:placeholder": "Enter your email address",
    },
    phone: {
      "ui:placeholder": "(555) 555-5555",
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
        <button type="submit" className="usa-button">
          Next
        </button>
      </div>
    </Form>
  );
};

export default PersonalInfoStep;
