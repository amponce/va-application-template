import React from "react";

/**
 * Benefits Information Step Component
 * Third step of the multi-step form collecting benefits information
 *
 * @param {Object} props - Component props
 * @param {Object} props.formData - Current form data
 * @param {Object} props.stepSchema - Schema definition for this step
 * @param {Function} props.onSubmit - Callback when form is submitted
 * @param {Function} props.onPrevious - Callback when moving to previous step
 */
const BenefitsInfoStep = ({ formData, stepSchema, onSubmit, onPrevious }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Manually collect form data from the VA components
    const checkedBenefits = [];
    document.querySelectorAll("va-checkbox").forEach((checkbox) => {
      if (checkbox.checked) {
        checkedBenefits.push(checkbox.value);
      }
    });

    const priorityLevel =
      document.querySelector('input[name="priorityLevel"]:checked')?.value || "Medium";
    const additionalInfo =
      document.querySelector('textarea[name="additionalInformation"]')?.value || "";

    // Create final form data and submit
    const stepData = {
      requestedBenefits: checkedBenefits,
      priorityLevel,
      additionalInformation: additionalInfo,
    };

    onSubmit({ formData: stepData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="vads-u-margin-bottom--4">
        <h3>Requested Benefits</h3>
        <va-checkbox-group
          label="Select the benefits you're interested in"
          required
        >
          {stepSchema.properties.requestedBenefits.items.enum.map((benefit) => (
            <va-checkbox
              key={benefit}
              label={benefit}
              value={benefit}
              checked={formData.requestedBenefits?.includes(benefit)}
            />
          ))}
        </va-checkbox-group>
      </div>

      <div className="vads-u-margin-bottom--4">
        <h3>Priority Level</h3>
        <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
          {stepSchema.properties.priorityLevel.enum.map((level) => (
            <div key={level} className="vads-u-margin-right--4">
              <input
                type="radio"
                id={`priority_${level}`}
                name="priorityLevel"
                value={level}
                defaultChecked={
                  formData.priorityLevel === level ||
                  (!formData.priorityLevel && level === "Medium")
                }
                className="usa-radio__input"
              />
              <label htmlFor={`priority_${level}`} className="usa-radio__label">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="vads-u-margin-bottom--4">
        <h3>Additional Information</h3>
        <textarea
          name="additionalInformation"
          className="usa-textarea"
          placeholder="Please provide any additional information..."
          rows={5}
          defaultValue={formData.additionalInformation || ""}
        />
      </div>

      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap vads-u-margin-top--4">
        <button
          type="button"
          onClick={onPrevious}
          className="usa-button-secondary usa-button vads-u-margin-right--2"
        >
          Previous
        </button>
        <button type="submit" className="usa-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BenefitsInfoStep;
