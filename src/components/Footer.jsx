import React from "react";
import styled from "styled-components";
import { SiLinkedin } from "react-icons/si";
import {FaReact} from 'react-icons/fa';

const Foot = styled.div`
  height: 125px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  z-index: 100;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  margin-top: 5%;
  background-color: black;

  pre {
    padding-top: 10px;
    color: grey;
    font-size: 14px;
  }
`;

const Text = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const LinkedInIcon = styled(SiLinkedin)`
  height: 25px;
  width: 25px;
  color: gray;
  position: relative;
  justify-content: center;
  text-align: center;
  margin-top: 15px;

  &:hover {
    color: skyblue;
  }
`;

const FooterReactIcon = styled(FaReact)`
  height: 14px;
  width: 14px;
`;

export const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <Foot>
      <Text>
        <a
          href={"https://www.linkedin.com/in/david-rogers-8828941b4/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          >
          <LinkedInIcon />
        </a>
        <pre>
          DAVID ROGERS © {date}
          <br></br>
          made with React <FooterReactIcon />
        </pre>
      </Text>
    </Foot>
  );
};
