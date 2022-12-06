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
            <LinkAnchor to="/">Home</LinkAnchor>
          </ListItem>
          <ListItem>
            <Anchor href="/#work">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/#portfolio">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/#profile">Profile</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/#about">About</Anchor>
          </ListItem>
          <ListItem>
            <LinkAnchor to="/contact">Contact</LinkAnchor>
          </ListItem>
        </List>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
