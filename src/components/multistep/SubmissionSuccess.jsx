import React from "react";

/**
 * Submission Success Component
 * Displays success message and form data summary after submission
 *
 * @param {Object} props - Component props
 * @param {Object} props.formData - Submitted form data
 * @param {Function} props.onReset - Callback to reset the form
 */
const SubmissionSuccess = ({ formData, onReset }) => {
  return (
    <div className="vads-u-margin-bottom--6">
      <va-alert
        close-btn-aria-label="Close notification"
        status="success"
        visible
        class="vads-u-margin-bottom--4"
      >
        <h2
          id="submission-success-headline"
          slot="headline"
          className="vads-u-font-family--sans"
        >
          Form Submitted Successfully
        </h2>
        <p className="vads-u-margin-y--0 vads-u-font-family--sans">
          Thank you for your submission. In a real application, this data would be sent to a server.
        </p>
      </va-alert>

      <div className="vads-u-background-color--gray-lightest vads-u-padding--3 vads-u-margin-bottom--4">
        <h3 className="vads-u-font-family--sans vads-u-margin-top--0">
          Form Data Summary
        </h3>
        <pre className="vads-u-font-family--mono vads-u-background-color--white vads-u-padding--2">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      <va-button
        text="Start Over"
        onClick={onReset}
        class="vads-u-width--auto"
      />
    </div>
  );
};

export default SubmissionSuccess;
