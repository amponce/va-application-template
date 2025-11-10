import React from "react";

/**
 * Button Examples Component
 * Demonstrates various VA button components
 */
const ButtonExamples = () => {
  return (
    <section className="vads-u-margin-bottom--6">
      <h2>Buttons</h2>
      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-flex-wrap--wrap">
        <va-button text="Primary Button" class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
        <va-button text="Secondary Button" secondary class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
        <va-button text="Disabled Button" disabled class="vads-u-margin-right--2 vads-u-margin-bottom--2" />
        <va-button text="Button with Icon" icon="arrow-right" class="vads-u-margin-bottom--2" />
      </div>
    </section>
  );
};

export default ButtonExamples;
