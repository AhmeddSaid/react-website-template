import React from "react";
// import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText, List, ListItem, Anchor, LinkAnchor } from "./style.js";

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>React Profile</LogoText>
        </Logo>
        <List>
          <ListItem>
            <LinkAnchor to="https://ahmeddsaid.github.io/react-website-template/">Home</LinkAnchor>
          </ListItem>
          <ListItem>
            <Anchor href="https://ahmeddsaid.github.io/react-website-template/#work">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="https://ahmeddsaid.github.io/react-website-template/#portfolio">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="https://ahmeddsaid.github.io/react-website-template/#profile">Profile</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="https://ahmeddsaid.github.io/react-website-template/#about">About</Anchor>
          </ListItem>
          <ListItem>
            <LinkAnchor to="https://ahmeddsaid.github.io/react-website-template/contact">Contact</LinkAnchor>
          </ListItem>
        </List>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
