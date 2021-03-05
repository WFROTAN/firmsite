import React from "react"
import styled from "styled-components"

import Button from "@atoms/button"

const SectionPricing = () => {
  return (
    <OverContainer>
      <PricingContainer>
        <CardContainer>
          <PricingCard>
            <div className="pricingHeader">
              <h3>Basic Launch Kit</h3>
              <h1>$500</h1>
            </div>
            <PricingList>
              <li>Live Strategy & Design Preferences Call</li>
              <li>Template: Custom built for you</li>
              <li>Text: You submit Launch Overview Form</li>
              <li>Photos: We optimize and place</li>
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
              <li>Template: Custom built for you</li>
              <li>Text: You submit Launch Overview Form</li>
              <li>Photos: We optimize and place</li>
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
          <PricingCard>
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
                First Name:
                <input type="text" name="name" />
              </label>
              <label>
                Last Name:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email:
                <input type="text" name="name" />
              </label>
              <label>
                Phone Number:
                <input type="text" name="name" />
              </label>
            </div>
            <div className="userText">
              <h4>How can we help you with your website?</h4>
              <textarea rows="10" cols="60"></textarea>
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
    width: 1100px;

    .userText {
      text-align: left;
      h4 {
        margin-bottom: 10px;
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
        width: 68%;
      }

      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 50px;
        text-align: left;
      }

      input {
        border: 0px solid;
        border-radius: 5px;
      }

      textarea {
        margin-bottom: 30px;
        border: 0px solid;
        border-radius: 5px;
        padding: 5px;
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
`

const MonthDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
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
  }

  & #month {
    font-size: 30px;
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
`

export default SectionPricing
