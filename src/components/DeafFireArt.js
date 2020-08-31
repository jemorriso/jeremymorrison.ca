import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import SectionHeader from './SectionHeader';

import 'react-medium-image-zoom/dist/styles.css';

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
`;

function DeafFireArt(props) {
  const { smallDeviceBreakpoint } = props;
  return (
    <section>
      <SectionHeader
        title="Deaf Fire Art"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
      <ContentWrapper>
        <Zoom>
          <Video autoPlay loop muted playsinline src={home} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={gallery} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={email} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={login} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={addImage} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={galleryEdit} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={editImage} />
        </Zoom>
        <Zoom>
          <Video autoPlay loop muted playsinline src={deleteImage} />
        </Zoom>
      </ContentWrapper>
    </section>
  );
}

DeafFireArt.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default DeafFireArt;
