import React from "react";

/**
 * Accordion Examples Component
 * Demonstrates VA accordion component
 */
const AccordionExamples = () => {
  return (
    <section className="vads-u-margin-bottom--6">
      <h2>Accordion</h2>
      <va-accordion>
        <va-accordion-item header="First Amendment" id="first">
          <p>
            Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.
          </p>
        </va-accordion-item>
        <va-accordion-item header="Second Amendment" id="second">
          <p>
            A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.
          </p>
        </va-accordion-item>
        <va-accordion-item header="Third Amendment" id="third">
          <p>
            No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.
          </p>
        </va-accordion-item>
      </va-accordion>
    </section>
  );
};

export default AccordionExamples;
