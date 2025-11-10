import React from "react";

/**
 * Navigation Examples Component
 * Demonstrates VA navigation components
 */
const NavigationExamples = () => {
  return (
    <section className="vads-u-margin-bottom--6">
      <h2>On This Page Navigation</h2>
      <div className="vads-u-margin-bottom--4">
        <div>
          <button onClick={function noRefCheck(){}}>Español</button>
          <button onClick={function noRefCheck(){}}>English</button>
          <button onClick={function noRefCheck(){}}>Tagalog</button>
          <article>
            <va-on-this-page />
            <h2 id="if-im-a-veteran">
              If I'm a Veteran, can I get VR&E benefits and services?
            </h2>
            <p>
              You may be eligible for VR&E benefits and services if you're a Veteran, and you meet all of the requirements listed below.
            </p>
            <p>
              <strong>All of these must be true. You:</strong>
            </p>
            <ul>
              <li>
                Didn't receive a dishonorable discharge, <strong>and</strong>
              </li>
              <li>
                Have a service-connected disability rating of at least 10% from VA,
                <strong>and</strong>
              </li>
              <li>
                <a href="#">Apply for VR&E services</a>
              </li>
            </ul>
            <h2 id="telephone-contacts">Telephone Contacts</h2>
            <p>Here is a table of phone numbers</p>
            <h2 id="some-additional-info">Some additional information</h2>
            <p>Placeholder for additional content.</p>
            <ol>
              <li>Alpha</li>
              <li>Beta</li>
              <li>Gamma</li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NavigationExamples;
