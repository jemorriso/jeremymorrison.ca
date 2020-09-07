import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';

import home from '../assets/deafFireArt/home.mp4';
import gallery from '../assets/deafFireArt/gallery.mp4';
import email from '../assets/deafFireArt/email.mp4';
import login from '../assets/deafFireArt/login.mp4';
import addImage from '../assets/deafFireArt/addImage.mp4';
import galleryEdit from '../assets/deafFireArt/galleryEdit.mp4';
import editImage from '../assets/deafFireArt/editImage.mp4';
import deleteImage from '../assets/deafFireArt/deleteImage.mp4';

const ContentWrapper = styled.div`
  /* width based on number of characters for readability */
  width: 80ch;
  max-width: 100%;
  margin: auto;
`;

const Video = styled.video`
  width: 100%;
  margin-top: 1em;
`;

const P = styled.p``;

const projectDetails = `
The back end is 
This project was my introduction to using CSS preprocessors, I used SASS here, following a conventional folder structure including folders for abstracts, components, layouts, pages, and vendors. I found it much easier than using basic CSS. All the styling in this project was done without the use of any libraries such as Bootstrap. Transitions were accomplished by using CSS over Javascript wherever possible. Additionally, vanilla JS was used, with no frameworks.
`;

const imageDescriptions = [
  'Landing page featuring animated CSS transitions. This project was my introduction to using CSS preprocessors, I used SASS here, following a conventional folder structure including folders for abstracts, components, layouts, pages, and vendors. I found it much easier than using basic CSS. All the styling in this project was done without the use of any libraries such as Bootstrap. Transitions were accomplished by using CSS over Javascript wherever possible. Additionally, vanilla JS was used, with no frameworks.',
  'The gallery features a responsive CSS grid of image cards. ',
];

function DeafFireArt(props) {
  const { smallDeviceBreakpoint } = props;
  return (
    <section>
      <SectionHeader
        title="Deaf Fire Art"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
      <ContentWrapper>
        <Video controls loop muted playsinline src={home} />
        <Video controls loop muted playsinline src={gallery} />
        <Video controls loop muted playsinline src={email} />
        <Video controls loop muted playsinline src={login} />
        <Video controls loop muted playsinline src={addImage} />
        <Video controls loop muted playsinline src={galleryEdit} />
        <Video controls loop muted playsinline src={editImage} />
        <Video controls loop muted playsinline src={deleteImage} />
      </ContentWrapper>
    </section>
  );
}

DeafFireArt.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default DeafFireArt;
