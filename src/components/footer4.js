import React from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo"></div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link1 ?? (
                <fragment>
                  <span className="footer4-text4 thq-body-small">
                    Support Groups
                  </span>
                </fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link2 ?? (
                <fragment>
                  <span className="footer4-text5 thq-body-small">About Us</span>
                </fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.link3 ?? (
                <fragment>
                  <span className="footer4-text6 thq-body-small">
                    Contact Us
                  </span>
                </fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">
                <span>© 2024 Little Tigers Foundation</span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="footer4-footer-links"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  link1: undefined,
  link2: undefined,
  link3: undefined,
}

Footer4.propTypes = {
  link1: PropTypes.element,
  link2: PropTypes.element,
  link3: PropTypes.element,
}

export default Footer4
