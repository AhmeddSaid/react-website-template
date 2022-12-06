import React from "react";

import { AboutSection, Info, Title, TitleSpan, InfoTitle, InfoDesc, Anchor } from "./style";

const About = () => {
  return (
    <AboutSection>
      <div className="container">
        <Info>
          <Title>
            <TitleSpan>This is</TitleSpan> Me
          </Title>
          <InfoTitle>Creative Director</InfoTitle>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="/#">explicabo </Anchor>
            maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
            veritatis?
          </InfoDesc>
          <InfoDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil
            aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
          </InfoDesc>
        </Info>
      </div>
    </AboutSection>
  );
};

export default About;
