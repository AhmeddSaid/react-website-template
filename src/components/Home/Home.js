import React from "react";
import { HomeSection, Info, Title, HomeInfo, HomeDesc, HomeDescSpan, Button } from "./style";

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <Info>
          <Title>Ahmed Said</Title>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Iam a professional <HomeDescSpan>UX Designer</HomeDescSpan> and Front-End Developer creating modern and
            resposive designs to Web and Mobile. Let us work together. Thank you.
          </HomeDesc>
          <Button>Let's Begin</Button>
        </Info>
      </div>
    </HomeSection>
  );
};

export default Home;
