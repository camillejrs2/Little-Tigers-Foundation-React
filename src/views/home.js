import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Little Tigers Foundation</title>
        <meta property="og:title" content="Little Tigers Foundation" />
      </Helmet>
      <Navbar8
        link1={
          <fragment>
            <span className="home-text thq-link thq-body-small">Home</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text01 thq-link thq-body-small">
              About Us
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text02 thq-link thq-body-small">
              Support Groups
            </span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="home-text03 thq-link thq-body-small">
              Contact Us
            </span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="home-text04 thq-body-large">Home</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="home-text05 thq-body-large">About Us</span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="home-text06 thq-body-large">Support Groups</span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="home-text07 thq-body-large">Contact Us</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="home-text08">Main Action</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text09">Secondary Action</span>
          </fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyNjI0NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        page1Description={
          <fragment>
            <span className="home-text10 thq-body-small">
              Welcome to Little Tigers Foundation - Your mental health support
              platform
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="home-text11 thq-body-small">
              Learn more about Little Tigers Foundation and our mission
            </span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="home-text12 thq-body-small">
              Join our online or local support groups for teenagers, parents,
              health professionals, and educators
            </span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="home-text13 thq-body-small">
              Get in touch with us for more information or to provide feedback
            </span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <fragment>
            <span className="home-text14 thq-body-small">Sign Up Now</span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="home-text15 thq-body-small">Learn More</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text16 thq-body-large">
              Join our supportive community for mental health services
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text17 thq-heading-1">
              Welcome to Little Tigers Foundation
            </span>
          </fragment>
        }
        image1Src="https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxjaGlsZHJlbiUyMHxlbnwwfHx8fDE3MjE5MTk5MzV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjc2NHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image3Src="https://images.unsplash.com/photo-1504439268584-b72c5019471e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjg0Mnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image7Src="https://images.unsplash.com/photo-1682616323196-8a4df1e30151?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fHRlZW5hZ2Vyc3xlbnwwfHx8fDE3MjE5MjI5OTl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1647833202056-e6e67293ba81?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMjk0MHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image9Src="https://images.unsplash.com/photo-1721332149274-586f2604884d?ixid=M3w5MTMyMXwxfDF8YWxsfDMxfHx8fHx8Mnx8MTcyMTkyMjgxOXw&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero17>
      <Features24
        feature1Title={
          <fragment>
            <span className="home-text18 thq-heading-2">
              Teen Support Groups
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text19 thq-heading-2">
              Health Professional Resources
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text20 thq-heading-2">
              Parent Support Groups
            </span>
          </fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1523138251108-2c58a1ec170f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHx0ZWVuYWdlcnN8ZW58MHx8fHwxNzIxOTIyOTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <fragment>
            <span className="home-text21 thq-body-small">
              Teenagers can join local support groups to discuss mental health
              challenges
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text22 thq-body-small">
              Health professionals can access resources and tools to support
              young patients
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text23 thq-body-small">
              Join our online community to connect with other parents and share
              experiences
            </span>
          </fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <fragment>
            <span className="home-text24">Sign Up Now</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text25 thq-body-large">
              Sign up now to receive more information about our online and local
              support groups.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text26 thq-heading-2">
              Join Little Tigers Foundation Today!
            </span>
          </fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <fragment>
            <span className="home-text27 thq-heading-2">
              Online Support Groups
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="home-text28 thq-heading-2">
              Local In-Person Support Groups
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="home-text29 thq-heading-2">
              Tailored Support for Teens, Parents, Health Professionals, and
              Educators
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="home-text30 thq-body-small">
              Join our online support groups to connect with others facing
              similar challenges and receive virtual support from trained
              professionals.
            </span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="home-text31 thq-body-small">
              Find and join local, in-person support groups in your area to meet
              others in person and engage in group activities that promote
              mental well-being.
            </span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="home-text32 thq-body-small">
              Receive personalized support tailored to the unique needs of
              teenagers, parents, health professionals, and educators through
              our specialized programs and resources.
            </span>
          </fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <fragment>
            <span className="home-text33 thq-heading-2">
              Sign up for more information
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="home-text34 thq-heading-2">Complete the form</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="home-text35 thq-heading-2">
              Submit your information
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="home-text36 thq-heading-2">
              Join our support groups
            </span>
          </fragment>
        }
        step1Description={
          <fragment>
            <span className="home-text37 thq-body-small">
              Fill out the form below to receive more information about Little
              Tigers Foundation and how to join our support groups.
            </span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="home-text38 thq-body-small">
              Provide your name, email address, post code, and any message or
              feedback you&apos;d like to share.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="home-text39 thq-body-small">
              Click the submit button to send us your details and we will get
              back to you shortly.
            </span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="home-text40 thq-body-small">
              Once you sign up, you&apos;ll receive instructions on how to join
              our online or local in-person support groups.
            </span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <fragment>
            <span className="home-text41 thq-body-small">
              The support groups provided by Little Tigers Foundation have been
              a lifesaver for my child. Thank you for creating a safe space for
              them to express themselves.
            </span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="home-text42 thq-body-small">
              I highly recommend Little Tigers Foundation to my patients seeking
              mental health support. The resources and community are invaluable.
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="home-text43 thq-body-small">
              Being part of the online support group has helped me feel less
              alone in my struggles. Thank you for understanding and supporting
              us.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="home-text44 thq-body-small">
              Little Tigers Foundation has been a great resource for me to
              better understand how to support my students&apos; mental health
              needs. Thank you for the valuable information.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="home-text45 thq-body-small">
              Read what others have to say about their experience with Little
              Tigers Foundation.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text46 thq-heading-2">Testimonials</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="home-text47 thq-body-large">Sara Johnson</span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="home-text48 thq-body-large">Dr. Michael Lee</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="home-text49 thq-body-large">Emily Chen</span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="home-text50 thq-body-large">Sophie Adams</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="home-text51 thq-body-small">Parent</span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="home-text52 thq-body-small">Psychologist</span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="home-text53 thq-body-small">Teenager</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="home-text54 thq-body-small">Educator</span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="home-text55 thq-body-large">
              Currently we are based in Brisbane and the Gold Coast, but we are
              in the process of expanding to other Australian cities. Watch this
              space!
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="home-text56 thq-heading-2">Current Locations</span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="home-text57 thq-heading-3">Brisbane</span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="home-text58 thq-heading-3">Gold Coast</span>
          </fragment>
        }
        location1ImageSrc="https://images.unsplash.com/photo-1540715542603-0fd3fb5097c4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMzI2MHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        location2ImageSrc="https://images.unsplash.com/photo-1594207056540-cd889d93af68?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMTkyMzMxNnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        location1Description={
          <fragment>
            <span className="home-text59 thq-body-large">
              Our first location
            </span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="home-text60 thq-body-large">
              Our newest location
            </span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <fragment>
            <span className="home-text61 thq-body-small">Support Groups</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="home-text62 thq-body-small">About Us</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="home-text63 thq-body-small">Contact Us</span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
