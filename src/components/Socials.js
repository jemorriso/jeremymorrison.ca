import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  background-color: #dc8bfc;
  min-height: 1em;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.a`
  /* background-color: black; */
  color: black;
  margin: 0.5em;
  border-radius: 50%;
  min-height: 1em;
  min-width: 1em;
`;

function Socials(props) {
  return (
    <Wrapper>
      <Icon href="mailto:contact@jeremymorrison.ca">
        <FontAwesomeIcon icon="envelope" />
      </Icon>
      <Icon
        href="https://www.linkedin.com/in/jwill-morrison/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </Icon>
      <Icon
        href="https://github.com/JeMorriso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'github']} />
      </Icon>
      <Icon
        href="https://www.instagram.com/_jeremymorrison/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </Icon>
      <Icon
        href="https://open.spotify.com/user/11y8roaohv2cggx4q9u09fiiu?si=4d0c5dj1RnajQmzcwEY9Zw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={['fab', 'spotify']} />
      </Icon>
    </Wrapper>
  );
}

export default Socials;
