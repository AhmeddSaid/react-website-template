import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Profile.css";

import {
  ProfileSkills,
  ProfileSection,
  Title,
  TitleSpan,
  List,
  ListItem,
  ListItemSpan,
  Website,
  SkillsSection,
  Desc,
  Bar,
  BarTitle,
  Percent,
  Parent,
  SP,
} from "./style";

const Profile = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => setSkills(res.data.skills));
  }, []);

  const Skills = skills.map((skill) => {
    return (
      <Bar key={skill.id}>
        <BarTitle>{skill.name}</BarTitle>
        <Percent>{skill.percent}</Percent>
        <Parent>
          <SP style={{ width: skill.percent }}></SP>
        </Parent>
      </Bar>
    );
  });
  console.log(skills);

  return (
    <ProfileSkills id="profile">
      <div className="container">
        <ProfileSection>
          <Title>
            <TitleSpan>My </TitleSpan>Profile
          </Title>
          <List>
            <ListItem>
              <ListItemSpan>Name</ListItemSpan>
              Ahmed Said
            </ListItem>
            <ListItem>
              <ListItemSpan>Birthday</ListItemSpan>
              12/10/1996
            </ListItem>
            <ListItem>
              <ListItemSpan>Address</ListItemSpan>
              El-Haram
            </ListItem>
            <ListItem>
              <ListItemSpan>Phone</ListItemSpan>
              +123 456 789
            </ListItem>
            <ListItem>
              <ListItemSpan>Email</ListItemSpan>
              ahmedsaidadnan@outlook.com
            </ListItem>
            <ListItem>
              <ListItemSpan>Website</ListItemSpan>
              <Website>www.google.com</Website>
            </ListItem>
          </List>
        </ProfileSection>
        <SkillsSection>
          <Title>
            Some <TitleSpan>skills</TitleSpan>
          </Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis
            similique.
          </Desc>
          {Skills}
        </SkillsSection>
      </div>
    </ProfileSkills>
  );
};

export default Profile;
