import React from "react";

/**
 * Other Component Examples
 * Demonstrates miscellaneous VA components
 */
const OtherComponentExamples = () => {
  return (
    <>
      <section className="vads-u-margin-bottom--6">
        <h2>Date Input</h2>
        <div className="vads-u-margin-bottom--4">
          <va-date
            label="What's the date or anticipated date of your release from active duty?"
            name="discharge-date"
          />
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Links</h2>
        <div className="vads-u-margin-bottom--4">
          <p>
            If you need help to gather your information or fill out your application/form,{' '}
            <va-link
              href="https://va.gov/vso/"
              text="contact a local Veterans Service Organization (VSO)"
            />
          </p>

          <div className="vads-u-margin-top--2">
            <va-link-action
              href="https://va.gov/vso/"
              label="This is an aria label for the Action Link"
              message-aria-describedby="Custom message"
              text="Call to action"
              type="primary"
            />
          </div>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Loading Indicator</h2>
        <div className="vads-u-margin-bottom--4">
          <div>
            <va-loading-indicator
              label="Loading"
              message="Loading your application..."
            />
          </div>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <div className="vads-u-margin-bottom--4">
          <va-need-help>
            <div slot="content">
              <p>
                Call us at{' '}
                <va-telephone contact="8008271000" />
                . We're here Monday through Friday, 8:00 a.m to 9:00 p.m ET. If you have hearing loss, call{' '}
                <va-telephone contact="711" tty />
                .
              </p>
            </div>
          </va-need-help>
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>OMB Info</h2>
        <div className="vads-u-margin-bottom--4">
          <va-omb-info
            exp-date="12/31/2077"
            omb-number="12-3456"
            res-burden={120}
          />
        </div>
      </section>

      <section className="vads-u-margin-bottom--6">
        <h2>Banner</h2>
        <div className="vads-u-margin-bottom--4">
          <va-banner
            data-label="Info banner"
            headline="Temporary closure of acute psychiatry at Lyons"
            type="info"
            visible
          >
            <p>
              We have temporarily closed our Acute Psychiatry at our Lyons Campus. All mental health admissions are being routed to our sister VA facilities in New York, Bronx and Manhattan or to the community as appropriate.
            </p>
            <a href="#">Get updates on affected services and facilities</a>
          </va-banner>
        </div>
      </section>
    </>
  );
};

export default OtherComponentExamples;
