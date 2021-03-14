import React from "react"
import styled from "styled-components"

import Button from "@atoms/button"
import Subheading from "@atoms/subheading"

const SectionPricing = () => {
  return (
    <OverContainer>
      <div className="sub-heading">
        <Subheading>Pricing</Subheading>
        <h2>Choose from two simple options.</h2>
      </div>
      <PricingContainer>
        <CardContainer>
          <PricingCard className="left-card">
            <div className="pricingHeader">
              <h3>Basic Launch Kit</h3>
              <h1>$500</h1>
            </div>
            <PricingList>
              <li>Live Strategy & Design Preferences Call</li>
              <li>
                <span style={{ fontWeight: 700 }}>Template:</span> Custom built
                for you
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Text:</span> You submit Launch
                Overview Form
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Photos:</span> We optimize and
                place
              </li>
              <li>Up to 10 Pages + FREE Reviews Tool</li>
              <li>$50/mo support & training (details below)</li>
            </PricingList>
          </PricingCard>
          <PricingCard>
            <div className="pricingHeader">
              <h3>Deluxe Launch Kit</h3>
              <h1>$1000</h1>
            </div>
            <PricingList>
              <li>Live Strategy & Design Preferences Call</li>
              <li>
                <span style={{ fontWeight: 700 }}>Template:</span> Custom built
                for you
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Text:</span> You submit Launch
                Overview Form
              </li>
              <li>
                <span style={{ fontWeight: 700 }}>Photos:</span> We optimize and
                place
              </li>
              <li>Up to 10 Pages + FREE Reviews Tool</li>
              <li>$50/mo support & training (details below)</li>
            </PricingList>
          </PricingCard>
        </CardContainer>
      </PricingContainer>
      <Seperator>
        <h3>MONTHLY HOSTING REQUIRED</h3>
        <p>Includes FREE domain, hosting, SSL, and $2,000+/yr in tools</p>
      </Seperator>
      <MonthContainer>
        <ContainerItems>
          <PricingCard id="monthly-card">
            <div className="pricingHeader">
              <h3>Monthly Service Charge</h3>
              <h1>
                $50<span id="month"> / Month</span>
              </h1>
            </div>
            <PricingList>
              <li>INCLUDES: Custom Domain Renewal </li>
              <li>INCLUDES: Elementor Pro Editor </li>
              <li>INCLUDES: Secure (SSL) Encryption</li>
              <li>INCLUDES: Fast Cloud-Based Hosting</li>
              <li>INCLUDES: Daily Site Backups</li>
              <li>INCLUDES: Google My Business</li>
              <li>INCLUDES: Marketing Bootcamp</li>
              <li>INCLUDES: Web Design Bootcamp </li>
              <li>PREMIUM Tools and Plugins</li>
            </PricingList>
          </PricingCard>
          <MonthDetails>
            <div>
              <h4>INCLUDES PREMIUM PLUGINS ($2,000+/yr)</h4>Our websites and
              Launch Kits come packed with tested, vetted, and secure premium
              and pro licensed plugins that work seamlessly together. Enjoy all
              the perks of Elementor PRO, WP Rocket, MailGun, Gravity Forms
              Elite, Uptime Robot and more!
            </div>
            <div>
              <h4>CLOUD-BASED and SECURE</h4>Don't worry about losing data,
              leads, time, or security as we also include an SSL Certificate,
              high-speed cloud based hosting on either KINSTA or FLYWHEEL
              servers to make sure you load FAST whether being viewed on mobile
              devices or desktops.
            </div>
          </MonthDetails>
        </ContainerItems>
      </MonthContainer>
      <FormContainer>
        <div className="form-details">
          <h2>Interested? Contact Us!</h2>
          <form>
            <div className="form-row">
              <label>
                First Name
                <input type="text" name="name" />
              </label>
              <label>
                Last Name
                <input type="text" name="name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email
                <input type="text" name="name" />
              </label>
              <label>
                Phone Number
                <input type="text" name="name" />
              </label>
            </div>
            <div className="userText">
              <h4>How can we help you with your website?</h4>
              <textarea rows="10"></textarea>
            </div>
            <Button id="button-form" href="#checkout">
              Contact
            </Button>
          </form>
        </div>
      </FormContainer>
    </OverContainer>
  )
}

//<input id="submit" type="submit" value="Submit" />

const OverContainer = styled.div`
  margin-bottom: 200px;

  .sub-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;

    @media screen and (max-width: 484px) {
      text-align: center;

      h2 {
        margin-right: 20px;
        margin-left: 20px;
      }
    }
  }
`

const PricingContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
  margin-bottom: 100px;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 0px 30px;

  .left-card {
    margin-right: 20px;
  }

  @media screen and (max-width: 864px) {
    flex-direction: column;
    align-items: center;

    .left-card {
      margin-right: 0px;
      margin-bottom: 50px;
    }
  }
`

const MonthContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #f9f6f3;

  & .form-details {
    width: 748px;

    .userText {
      width: 100%;
      text-align: left;
      background-color: white;
      padding: 0px 10px;
      padding-top: 5px;
      border-radius: 2px;
      margin-bottom: 20px;

      h4 {
        font-size: 12px;
        margin-bottom: 10px;
      }

      textarea {
        outline-width: 0;
        width: 100% !important;
      }

      @media screen and (max-width: 772px) {
        padding: 15px;
      }

      @media screen and (max-width: 864px) {
        width: 604px;
      }

      @media screen and (max-width: 639px) {
        width: 95%;
      }
    }

    h2 {
      margin-bottom: 50px;
      margin-top: 50px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      #button-form {
        margin-bottom: 12px;
      }

      .form-row {
        display: flex;
        justify-content: space-between;
        width: 748px;

        input {
          padding: 10px;
        }

        @media screen and (max-width: 864px) {
          width: 604px;
        }

        @media screen and (max-width: 639px) {
          width: 95%;
        }

        @media screen and (max-width: 564px) {
          flex-direction: column;

          label {
            width: 100%;
          }
        }
      }

      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        text-align: left;
        background-color: white;
        padding: 0px 10px;
        padding-top: 5px;
        border-radius: 2px;
        font-size: 12px;
        width: 48%;
      }

      input {
        border: 0px solid;
        border-radius: 5px;
        outline-width: 0;
        font-size: 20px;
        padding: 0px !important;
        margin: 0px !important;
        padding-bottom: 10px !important;
      }

      textarea {
        border: 0px solid;
        border-radius: 5px;
        padding: 5px;
        width: 100%;
        resize: none;
      }

      #submit {
        width: 100px;
      }
    }
  }
`

const ContainerItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1100px;
  margin: 0px 30px;

  #monthly-card {
    margin-right: 40px;
  }

  @media screen and (max-width: 864px) {
    flex-direction: column;
    align-items: center;

    #monthly-card {
      margin-right: 0px;
      margin-bottom: 100px;
    }
  }

  @media screen and (max-width: 525px) {
    width: 95%;
  }
`

const MonthDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;

  @media screen and (max-width: 525px) {
    width: 95%;
  }
`

const PricingCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 50px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & .pricingHeader {
    text-align: center;

    h1 {
      color: #eb3423;
    }
  }

  & #month {
    font-size: 30px;
  }

  @media screen and (max-width: 1072px) {
    padding: 50px 30px;
  }

  @media screen and (max-width: 934px) {
    padding: 50px;
  }

  @media screen and (max-width: 580px) {
    width: 95%;
    margin-bottom: 50px;
    text-align: center;
    padding: 50px 10px;
  }
`

const Seperator = styled.div`
  padding: 100px 0px 50px 0px;
  background-color: #f9f6f3;
  margin-bottom: 100px;
  text-align: center;
`

const PricingList = styled.ul`
  margin: 0;
  list-style-type: none;

  & li:before {
    font-weight: bold;
    content: "✓ ";
  }

  @media screen and (max-width: 945px) {
    font-size: 15px;
  }
`

export default SectionPricing
