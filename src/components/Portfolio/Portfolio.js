import axios from "axios";
import React, { useState, useEffect } from "react";
import { PortfolioSection, Title, TitleSpan, List, ListItem, Image, Overlay, OverlaySpan, Box } from "./style";

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => setImages(res.data.portfolio));
  }, []);

  const imagesList = images.map((image) => {
    return (
      <Box key={image.id}>
        <Image
          src={image.image}
          alt="image"
        />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </Box>
    );
  });

  return (
    <PortfolioSection id="portfolio">
      <Title className="title-one">
        <TitleSpan>My</TitleSpan> Portfolio
      </Title>
      <List>
        <ListItem active>All</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>Photoshop</ListItem>
        <ListItem>Wordpress</ListItem>
        <ListItem>Mobile</ListItem>
      </List>
      <div className="box">{imagesList}</div>
    </PortfolioSection>
  );
};

export default Portfolio;
