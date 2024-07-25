import React from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              <span>
                Discover the Power of a
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>like-minded Community</span>
            </h2>
            <p className="thq-body-large">
              We believe in a compassionate, holistic approach where mental
              health is nurtured and prioritised at every level. 
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Join us</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <fragment>
                    <span className="steps2-text25 thq-heading-2">
                      Sign up for more information
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <fragment>
                    <span className="steps2-text20 thq-body-small">
                      Fill out the form below to receive more information about
                      Little Tigers Foundation and how to join our support
                      groups.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text08 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <fragment>
                    <span className="steps2-text22 thq-heading-2">
                      Complete the form
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <fragment>
                    <span className="steps2-text21 thq-body-small">
                      Provide your name, email address, post code, and any
                      message or feedback you&apos;d like to share.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text11 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <fragment>
                    <span className="steps2-text23 thq-heading-2">
                      Submit your information
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <fragment>
                    <span className="steps2-text18 thq-body-small">
                      Click the submit button to send us your details and we
                      will get back to you shortly.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <fragment>
                    <span className="steps2-text24 thq-heading-2">
                      Join our support groups
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <fragment>
                    <span className="steps2-text19 thq-body-small">
                      Once you sign up, you&apos;ll receive instructions on how
                      to join our online or local in-person support groups.
                    </span>
                  </fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Description: undefined,
  step4Description: undefined,
  step1Description: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step4Title: undefined,
  step1Title: undefined,
}

Steps2.propTypes = {
  step3Description: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
}

export default Steps2
