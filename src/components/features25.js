import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2>
                {props.feature1Title ?? (
                  <fragment>
                    <span className="features25-text3 thq-heading-2">
                      Online Support Groups
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature1Description ?? (
                  <fragment>
                    <span className="features25-text1 thq-body-small">
                      Join our online support groups to connect with others
                      facing similar challenges and receive virtual support from
                      trained professionals.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature2Title ?? (
                  <fragment>
                    <span className="features25-text thq-heading-2">
                      Local In-Person Support Groups
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature2Description ?? (
                  <fragment>
                    <span className="features25-text5 thq-body-small">
                      Find and join local, in-person support groups in your area
                      to meet others in person and engage in group activities
                      that promote mental well-being.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2>
                {props.feature3Title ?? (
                  <fragment>
                    <span className="features25-text4 thq-heading-2">
                      Tailored Support for Teens, Parents, Health Professionals,
                      and Educators
                    </span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <fragment>
                    <span className="features25-text2 thq-body-small">
                      Receive personalized support tailored to the unique needs
                      of teenagers, parents, health professionals, and educators
                      through our specialized programs and resources.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1567762755523-74cefdb5e25f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkxNTAyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature3ImgAlt: 'Image depicting tailored support for different groups',
  feature2ImgAlt: 'Image depicting local in-person support groups',
  feature1Description: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1680130071424-a70a4b7133fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkxNTAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature1Title: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1625480859582-03ea1d0e88fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkxNTAyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Image depicting online support groups',
}

Features25.propTypes = {
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
}

export default Features25
