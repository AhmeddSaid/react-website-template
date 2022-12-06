import React, { useState, useEffect } from "react";
import { WorkSection, Title, TitleSpan, Part, Icon, PartTitle, Line, PartDesc, Works } from "./style";
import axios from "axios";

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => setWorks(res.data.works));
  }, []);

  const workList = works.map((work) => {
    return (
      <Part
        first={work.id}
        key={work.id}
      >
        <Icon className={work.icon_name}></Icon>
        <PartTitle>{work.title}</PartTitle>
        <Line />
        <PartDesc>{work.body}</PartDesc>
      </Part>
    );
  });

  return (
    <WorkSection id="work">
      <div className="container">
        <Title>
          <TitleSpan>My</TitleSpan> Work
        </Title>
        <Works>{workList}</Works>
      </div>
    </WorkSection>
  );
};

export default Work;
