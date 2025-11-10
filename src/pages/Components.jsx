import React from "react";
import Layout from "../components/layout";
import AlertExamples from "../components/examples/AlertExamples";
import ButtonExamples from "../components/examples/ButtonExamples";
import FormControlExamples from "../components/examples/FormControlExamples";
import CardExamples from "../components/examples/CardExamples";
import AccordionExamples from "../components/examples/AccordionExamples";
import NavigationExamples from "../components/examples/NavigationExamples";
import ProcessListExamples from "../components/examples/ProcessListExamples";
import OtherComponentExamples from "../components/examples/OtherComponentExamples";

/**
 * Components showcase page
 * Displays examples of VA components from the VA Design System
 * Now refactored into smaller, modular example components
 */
const ComponentsPage = () => {
  return (
    <Layout title="VA Components">
      <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
        VA Components
      </h1>

      <p className="va-introtext vads-u-font-family--sans vads-u-margin-bottom--4">
        This page demonstrates various VA components from the VA Design System.
      </p>

      <AlertExamples />
      <ButtonExamples />
      <FormControlExamples />
      <CardExamples />
      <AccordionExamples />
      <OtherComponentExamples />
      <NavigationExamples />
      <ProcessListExamples />

      <div className="vads-u-display--flex vads-u-flex-direction--row vads-u-justify-content--center">
        <va-button
          text="Back to Home"
          href="/"
          secondary
          class="vads-u-margin-y--4"
        />
      </div>
    </Layout>
  );
};

export default ComponentsPage;
