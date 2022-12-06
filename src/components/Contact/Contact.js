import React from "react";

import { ContactSection, Title, TitleSpan, Form, FormInputDiv, FormInput, Subject, TextArea, Submit } from "./style";

const Contact = () => {
  return (
    <ContactSection>
      <div className="container">
        <Title>
          <TitleSpan>Drop </TitleSpan>Me A line
        </Title>
        <Form action="">
          <FormInputDiv>
            <FormInput
              type="text"
              placeholder="Your Name"
            />
            <FormInput
              type="email"
              placeholder="Your Email"
            />
          </FormInputDiv>
          <Subject
            type="text"
            placeholder="Your Subject"
          />
          <TextArea
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></TextArea>
          <Submit
            type="submit"
            value="Send Message"
          />
        </Form>
      </div>
    </ContactSection>
  );
};

export default Contact;
