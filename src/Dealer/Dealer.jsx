import React from 'react';
import { asset } from './assets/asset'; // Imports the 'asset' object from the specified path, likely containing paths to various image and other static files.
import './Dealer.css'; // Imports the CSS styles defined in 'App.css' to style this component.

// This is the main functional component of the application.
const Dealer = () => {
  return (
    <>
      {/* This empty div likely acts as a spacer for the header on desktop screens, using CSS to create visual padding. */}
      <div className="dealer_header_spacer"></div>

      {/* This section represents the hero area of the "Become a Dealer" page. */}
      <section className="dealer_hero_section">
        {/* This div contains the banner image. */}
        <div className="dealer_hero_banner">
          {/* Image tag to display the banner image.
              The 'src' attribute dynamically gets the image path from the 'asset' object, specifically the 'become_our_Dealer1' property.
              The 'alt' attribute provides alternative text for accessibility.
              'width="100%"' makes the image responsive within its container.
              The comment indicates that the image can be changed by modifying the file path in 'src/assets/asset.js'. */}
          <img src={asset.become_our_Dealer1} alt="Become a Dealer Banner" width="100%" />
        </div>

        {/* This div acts as an overlay on the banner image, likely to add a semi-transparent background for the text. */}
        <div className="dealer_hero_banner_overlay">
          {/* This div contains the content that will be displayed on top of the banner image. */}
          <div className="dealer_hero_content">
            {/* Heading for the hero section. */}
            <h3>
              {/* The empty span might be used for styling purposes (e.g., a background element). */}
              <span></span>
              {/* The main title of the hero section. */}
              Become a Dealer
              {/* This empty div might also be used for styling or as a separator. */}
              <div></div>
            </h3>
          </div>
        </div>
      </section>

      {/* Adds vertical spacing between the hero section and the next content. */}
      <br />
      <br />

      {/* This div contains the main information section about becoming a dealer. */}
      <div className="dealer_main_container" >
        {/* Heading for the main information section. */}
        <h3>
          {/* Empty span, likely for styling. */}
          <span></span>
          {/* The main title describing the partnership opportunity. */}
          Partner with Alu Empire and Expand Your Business Today!
          {/* Empty div, likely for styling. */}
          <div></div>
        </h3>
        {/* Adds vertical spacing below the heading. */}
        <br />

        {/* Paragraph introducing the dealer partnership program. */}
        <p>
          {/* Empty h4 and strong tags, these seem like remnants and don't have any content. */}
          <h4> </h4>
          <strong></strong>
          {/* The main body of the introductory paragraph, explaining the benefits of becoming an Alu Empire dealer. */}
          Become an Alu Empire Dealer: Partner with the Best in Aluminum Solutions Are you looking to expand your business and offer high-quality aluminum products to your customers? Partner with Alu Empire and become an authorized dealer! We offer a comprehensive range of aluminum solutions, renowned for their durability, versatility, and aesthetic appeal. Joining our dealer network gives you access to premium products, competitive pricing, and dedicated support to help you succeed. Why Choose Alu Empire?
        </p>

        {/* This div contains the inner layout for the detailed information and the contact form. */}
        <div className='dealer_content_container'>
          {/* This div contains the left side with bullet points detailing the benefits of becoming a dealer. */}
          <div className='dealer_benefits_container'>
            {/* Each paragraph here highlights a specific benefit of partnering with Alu Empire. */}
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Premium Quality Products */}
              • Premium Quality Products: We pride ourselves on delivering top-tier aluminum products, manufactured to the highest industry standards. Our range includes [mention specific product categories, e.g., aluminum extrusions, sheets, profiles, composite panels, etc.], catering to diverse applications in construction, architecture, and manufacturing.
            </p>
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Competitive Pricing */}
              • Competitive Pricing: Benefit from attractive pricing structures that maximize your profit margins. We offer competitive rates and volume discounts to help you stay ahead in the market.
            </p>
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Comprehensive Product Range */}
              • Comprehensive Product Range: Offer your customers a diverse selection of aluminum solutions, all under one roof. This eliminates the need for them to source products from multiple suppliers, making your business a one-stop shop for all their aluminum needs.
            </p>
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Marketing Support */}
              • Marketing Support: We provide our dealers with marketing materials and resources to help them promote our products effectively. This includes [mention specific marketing support, e.g., brochures, product catalogs, digital marketing assets, co-branded materials, etc.].
            </p>
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Technical Support */}
              • Technical Support: Our team of experts is available to provide technical assistance and guidance on our products. We offer training programs and ongoing support to ensure you have the knowledge and expertise to serve your customers effectively.
            </p>
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Established Brand Reputation */}
              • Established Brand Reputation: Alu Empire is a trusted name in the aluminum industry, known for its quality and reliability. Partnering with us allows you to leverage our established brand reputation and build trust with your customers.
            </p>
            <p>
              {/* Empty h4 and strong tags. */}
              <h4></h4>
              <strong></strong>
              {/* Benefit: Growth Opportunities */}
              • Growth Opportunities: We are committed to the success of our dealers and offer ongoing support and opportunities for growth. As our network expands, you'll benefit from increased brand visibility and business opportunities.
            </p>
          </div>

          {/* This div contains the right side with the contact form for potential dealers to inquire. */}
          <div className="dealer_form_container">
            {/* This div styles the contact form container with a shadow effect. */}
            <div className="dealer_form_wrapper shadow">
              {/* Heading for the contact form. */}
              <p>
                {/* Empty h4 and strong tags. */}
                <h4></h4>
                <strong></strong>
                {/* The title of the contact form. */}
                Tell us about your project
              </p>
              {/* This div contains the input fields of the form. */}
              <div className="dealer_form_fields" >
                {/* Container for the Name input field. */}
                <div className="dealer_field_container">
                  {/* Label for the Name field. */}
                  <div className='dealer_field_label'>
                    <p>
                      Name
                    </p>
                  </div>
                  {/* Input field for the name. */}
                  <div className='dealer_field_input'>
                    <input className="dealer_input_field" type="text" placeholder="Enter your name" maxLength="35" />
                  </div>
                </div>
                {/* Container for the Phone Number input field. */}
                <div className="dealer_field_container">
                  {/* Label for the Phone Number field. */}
                  <div className='dealer_field_label'>
                    <p>
                      Phone Number
                    </p>
                  </div>
                  {/* Input field for the phone number. */}
                  <div className='dealer_field_input'>
                    <input className="dealer_input_field" type="text" placeholder="Enter your phone number" maxLength="15" />
                  </div>
                </div>
                {/* Container for the Email ID input field. */}
                <div className="dealer_field_container">
                  {/* Label for the Email ID field. */}
                  <div className='dealer_field_label'>
                    <p>
                      Email ID
                    </p>
                  </div>
                  {/* Input field for the email ID. */}
                  <div className='dealer_field_input'>
                    <input className="dealer_input_field" type="email" placeholder="Enter your email ID" maxLength="50" />
                  </div>
                </div>
                {/* Container for the State input field. */}
                <div className="dealer_field_container">
                  {/* Label for the State field. */}
                  <div className='dealer_field_label'>
                    <p>
                      State
                    </p>
                  </div>
                  {/* Input field for the state. */}
                  <div className='dealer_field_input'>
                    <input className="dealer_input_field" type="text" placeholder="Enter your state" maxLength="35" />
                  </div>
                </div>
                {/* Container for the City input field. */}
                <div className="dealer_field_container">
                  {/* Label for the City field. */}
                  <div className='dealer_field_label'>
                    <p>
                      City
                    </p>
                  </div>
                  {/* Input field for the city. */}
                  <div className='dealer_field_input'>
                    <input className="dealer_input_field" type="text" placeholder="Enter your city" maxLength="35" />
                  </div>
                </div>
                {/* Container for the Comment textarea field. */}
                <div className="dealer_field_container">
                  {/* Label for the Comment field. */}
                  <div className='dealer_field_label'>
                    <p>
                      Comment
                    </p>
                  </div>
                  {/* Textarea for the comment. */}
                  <div className='dealer_field_input'>
                    <textarea className="dealer_input_field" type="text" rows="3" placeholder="Enter your Comment" maxLength="35"></textarea>
                  </div>
                </div>

                {/* Submit button for the form. */}
                <button className='dealer_submit_btn'>
                  Submit
                  {/* SVG icon for the submit button (an arrow). */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="m13.5 7.5l-4-4m4 4l-4 4m4-4H1"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This div contains the final information section about the ideal dealer profile. */}
      <div className="dealer_requirements_container">
        {/* Heading for the ideal dealer profile section. */}
        <h3>
          {/* Empty span, likely for styling. */}
          <span></span>
          {/* The title describing the qualities they are looking for in a dealer. */}
          Who We Are Looking For: We are seeking motivated and enthusiastic individuals or businesses with:
          {/* Empty div, likely for styling. */}
          <div></div>
        </h3>
        {/* Paragraph highlighting the need for excellent customer service skills. */}
        <p>
          {/* Empty h4 and strong tags. */}
          <h4></h4>
          <strong></strong>
          {/* Bullet point: Excellent customer service skills. */}
          • Excellent customer service skills.
        </p>
        {/* Paragraph highlighting the commitment to quality. */}
        <p>
          {/* Empty h4 and strong tags. */}
          <h4></h4>
          <strong></strong>
          {/* Bullet point: A commitment to providing high-quality products and services. */}
          • A commitment to providing high-quality products and services.
        </p>
        {/* Paragraph highlighting the desire for growth. */}
        <p>
          {/* Empty h4 and strong tags. */}
          <h4></h4>
          <strong></strong>
          {/* Bullet point: A desire to grow and succeed. */}
          • A desire to grow and succeed.
        </p>
      </div>
    </>
  );
};

export default Dealer;