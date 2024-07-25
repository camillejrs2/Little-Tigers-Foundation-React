import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="testimonial17-text24 thq-heading-2">
                  Testimonials
                </span>
              </fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="testimonial17-text21 thq-body-small">
                  Read what others have to say about their experience with
                  Little Tigers Foundation.
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <fragment>
                          <span className="testimonial17-text23 thq-body-large">
                            Sara Johnson
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <fragment>
                          <span className="testimonial17-text22 thq-body-small">
                            Parent
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        The support groups provided by Little Tigers Foundation
                        have been a lifesaver for my child. Thank you for
                        creating a safe space for them to express themselves.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <fragment>
                          <span className="testimonial17-text19 thq-body-large">
                            Dr. Michael Lee
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <fragment>
                          <span className="testimonial17-text27 thq-body-small">
                            Psychologist
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <fragment>
                      <span className="testimonial17-text20 thq-body-small">
                        I highly recommend Little Tigers Foundation to my
                        patients seeking mental health support. The resources
                        and community are invaluable.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <fragment>
                          <span className="testimonial17-text15 thq-body-large">
                            Emily Chen
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            Teenager
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <fragment>
                      <span className="testimonial17-text17 thq-body-small">
                        Being part of the online support group has helped me
                        feel less alone in my struggles. Thank you for
                        understanding and supporting us.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <fragment>
                          <span className="testimonial17-text18 thq-body-large">
                            Sophie Adams
                          </span>
                        </fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <fragment>
                          <span className="testimonial17-text14 thq-body-small">
                            Educator
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <fragment>
                      <span className="testimonial17-text16 thq-body-small">
                        Little Tigers Foundation has been a great resource for
                        me to better understand how to support my students&apos;
                        mental health needs. Thank you for the valuable
                        information.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Position: undefined,
  author3Name: undefined,
  review4: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  review3: undefined,
  author4Name: undefined,
  author2Alt: 'Dr. Michael Lee',
  author2Name: undefined,
  review2: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  content1: undefined,
  author1Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author1Name: undefined,
  heading1: undefined,
  author3Alt: 'Emily Chen',
  author4Alt: 'Sophie Adams',
  author1Alt: 'Sara Johnson',
  author3Position: undefined,
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  author2Position: undefined,
}

Testimonial17.propTypes = {
  author4Position: PropTypes.element,
  author3Name: PropTypes.element,
  review4: PropTypes.element,
  author2Src: PropTypes.string,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author2Alt: PropTypes.string,
  author2Name: PropTypes.element,
  review2: PropTypes.element,
  author3Src: PropTypes.string,
  content1: PropTypes.element,
  author1Position: PropTypes.element,
  author4Src: PropTypes.string,
  author1Name: PropTypes.element,
  heading1: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  author2Position: PropTypes.element,
}

export default Testimonial17
