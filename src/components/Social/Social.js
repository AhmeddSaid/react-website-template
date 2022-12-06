import axios from "axios";
import React, { useEffect, useState } from "react";

import { SocialSection, Socials, Icon, Info, Info1, Info2 } from "./style";

const Social = () => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => setSocials(res.data.social));
  }, []);

  console.log(socials);

  const SocialsList = socials.map((social) => {
    // icon = i class
    // each color = class

    return (
      <Socials
        key={social.id}
        item={social.id}
      >
        <Icon className={social.icon}></Icon>
        <Info>
          <Info1>{social.title}</Info1>
          <Info2>{social.body}</Info2>
        </Info>
      </Socials>
    );
  });

  return <SocialSection>{SocialsList}</SocialSection>;
};

export default Social;
