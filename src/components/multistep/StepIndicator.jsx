import React from "react";

/**
 * Step Indicator Component
 * Displays the current step in a multi-step form process
 *
 * @param {Object} props - Component props
 * @param {Array} props.steps - Array of step objects with title property
 * @param {number} props.currentStep - Current active step index
 */
const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="vads-u-display--flex vads-u-justify-content--space-between vads-u-margin-bottom--4">
      {steps.map((stepInfo, index) => (
        <div
          key={index}
          className={`vads-u-text-align--center vads-u-flex--1 vads-u-padding--1 ${
            index === currentStep
              ? "vads-u-background-color--primary-alt-lightest vads-u-border--3px vads-u-border-color--primary"
              : ""
          }`}
        >
          <div className="vads-u-font-weight--bold vads-u-margin-bottom--1">
            Step {index + 1}
          </div>
          <div>{stepInfo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
