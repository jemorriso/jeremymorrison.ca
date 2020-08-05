import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import SectionHeader from './SectionHeader';

import 'react-medium-image-zoom/dist/styles.css';

import home from '../assets/home.mp4';
import gallery from '../assets/gallery.mp4';
import email from '../assets/email.mp4';
import login from '../assets/login.mp4';
import addImage from '../assets/addImage.mp4';
import galleryEdit from '../assets/galleryEdit.mp4';
import editImage from '../assets/editImage.mp4';
import deleteImage from '../assets/deleteImage.mp4';

const ImgWrapper = styled.div`
  width: 50%;
`;

const Img = styled.img`
  width: 100%;
`;
const FlexWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
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
      {/* <FlexWrapper> */}
      <Carousel>
        {/*     <ImgWrapper> */}
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
        {/*       <p>Landing page featuring CSS animation</p> */}
        {/*     </ImgWrapper> */}
      </Carousel>
      {/* </FlexWrapper> */}
    </section>
  );
}

DeafFireArt.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default DeafFireArt;
