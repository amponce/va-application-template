import React from "react";

/**
 * Card Examples Component
 * Demonstrates various VA card components
 */
const CardExamples = () => {
  return (
    <section className="vads-u-margin-bottom--6">
      <h2>Cards</h2>
      <div className="vads-grid-row">
        <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding--2">
          <va-card>
            <h3 slot="headline">Card Title</h3>
            <p>This is a basic card component that can be used to display content in a card format.</p>
            <va-button slot="actions" text="Card Action" secondary />
          </va-card>
        </div>
        <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding--2">
          <va-card background>
            <h3 slot="headline">Card with Background</h3>
            <p>This card has a background color applied.</p>
            <va-button slot="actions" text="Card Action" secondary />
          </va-card>
        </div>
        <div className="vads-grid-col-12 tablet:vads-grid-col-4 vads-u-padding--2">
          <va-card>
            <h3 slot="headline">Interactive Card</h3>
            <p>Cards can contain various interactive elements.</p>
            <va-button slot="actions" text="Primary Action" />
          </va-card>
        </div>
      </div>
    </section>
  );
};

export default CardExamples;
