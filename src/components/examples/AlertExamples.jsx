import React from "react";

/**
 * Alert Examples Component
 * Demonstrates various VA alert components
 */
const AlertExamples = () => {
  return (
    <section className="vads-u-margin-bottom--6">
      <h2 className="vads-u-font-family--serif vads-u-font-size--h3 vads-u-margin-top--4 vads-u-margin-bottom--3">
        Alerts
      </h2>

      <div className="vads-u-margin-bottom--2">
        <va-alert
          close-btn-aria-label="Close notification"
          status="info"
          visible
        >
          <h2 id="info-alert-headline" slot="headline">
            Informational Alert
          </h2>
          <p className="vads-u-margin-y--0">
            This is an informational alert with improved accessibility and formatting.
          </p>
        </va-alert>
      </div>

      <div className="vads-u-margin-bottom--2">
        <va-alert
          close-btn-aria-label="Close notification"
          status="success"
          visible
        >
          <h2 id="success-alert-headline" slot="headline">
            Success Alert
          </h2>
          <p className="vads-u-margin-y--0">
            This is a success alert with improved accessibility and formatting.
          </p>
        </va-alert>
      </div>

      <div className="vads-u-margin-bottom--2">
        <va-alert
          close-btn-aria-label="Close notification"
          status="warning"
          visible
        >
          <h2 id="warning-alert-headline" slot="headline">
            Warning Alert
          </h2>
          <p className="vads-u-margin-y--0">
            This is a warning alert with improved accessibility and formatting.
          </p>
        </va-alert>
      </div>

      <div className="vads-u-margin-bottom--2">
        <va-alert
          close-btn-aria-label="Close notification"
          status="error"
          visible
        >
          <h2 id="error-alert-headline" slot="headline">
            Error Alert
          </h2>
          <p className="vads-u-margin-y--0">
            This is an error alert with improved accessibility and formatting.
          </p>
        </va-alert>
      </div>

      <>
        <h2>Content title</h2>
        <va-alert-expandable
          status="info"
          trigger="Expandable Alert Example"
          close-btn-aria-label="Close expandable notification"
        >
          <p className="vads-u-margin-y--0">
            This is the expandable alert content. To take action on this alert, please call{' '}
            <va-telephone contact="8775551234" />
            {' '}or visit{' '}
            <va-link href="javascript:void(0);" text="va.gov" />
            {' '}for more information.
          </p>
        </va-alert-expandable>
        <p>Surrounding content.</p>
      </>
    </section>
  );
};

export default AlertExamples;
