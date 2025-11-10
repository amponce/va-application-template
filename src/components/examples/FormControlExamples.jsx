import React from "react";

/**
 * Form Control Examples Component
 * Demonstrates various VA form control components
 */
const FormControlExamples = () => {
  return (
    <section className="vads-u-margin-bottom--6">
      <h2>Form Controls</h2>

      <h3>Text Input</h3>
      <div className="vads-u-margin-bottom--4">
        <va-text-input label="Standard Text Input" name="text-example" />
      </div>

      <h3>Select</h3>
      <div className="vads-u-margin-bottom--4">
        <va-select label="Select Dropdown" name="select-example">
          <option value="">-- Select an option --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </va-select>
      </div>

      <h3>Checkbox Group</h3>
      <div className="vads-u-margin-bottom--4">
        <va-checkbox-group label="Checkbox Group">
          <va-checkbox label="Option 1" name="checkbox-example" value="option1" />
          <va-checkbox label="Option 2" name="checkbox-example" value="option2" />
          <va-checkbox label="Option 3" name="checkbox-example" value="option3" />
        </va-checkbox-group>
      </div>

      <h3>Radio Group</h3>
      <div className="vads-u-margin-bottom--4">
        <va-radio
          error={null}
          header-aria-describedby={null}
          hint=""
          label="Select one historical figure"
          label-header-level=""
        >
          <va-radio-option label="Sojourner Truth" name="group" value="1" />
          <va-radio-option label="Frederick Douglass" name="group" value="2" />
          <va-radio-option label="Booker T. Washington" name="group" value="3" />
          <va-radio-option label="George Washington Carver" name="group" value="4" />
        </va-radio>
      </div>

      <h3>Textarea</h3>
      <div className="vads-u-margin-bottom--4">
        <va-textarea label="Textarea" name="textarea-example" />
      </div>
    </section>
  );
};

export default FormControlExamples;
