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
  background-color: white;
  margin: 2rem auto;
  border-radius: 20px;
  padding: 3.5rem 0;
  color: black;
`;

const Video = styled.video`
  width: 95%;
  /* margin-top: 1em; */
  margin: 3.5rem auto;
  /* element must have display set to 'block' for margin auto to work */
  display: block;
  border-radius: 10px;
`;

const P = styled.p`
  width: 90%;
  margin: auto;
  font-size: 1.6rem;

  & + & {
    margin-top: 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  margin-left: 5%;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
`;

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
        <P>
          Deaf Fire Art is a portfolio website built for my client, Sandy
          Morrison, who has a pyrography (wood burning art) hobby / business
          that focuses on imagery related to deaf culture and American Sign
          Language.
        </P>
        <Video controls loop muted playsinline src={home} />
        <P>
          Sandy explained that he needed an image gallery page to highlight his
          work to the deaf community, an email contact form so that customers
          could contact him about purchasing pieces of artwork, and a custom URL
          that was memorable. Additionally, he would need to be able to upload
          and edit images whenever he finished a new piece, and delete images of
          pieces that were sold.
        </P>
        <H1>Implementation Overview</H1>
        <P>
          On the back end, Node.js was used so that I could use Express server
          along with Embedded JavaScript (EJS) templates. I wanted to practice
          core full stack skills so I used vanilla JavaScript on the front end,
          writing CSS using Sass as a preprocessor. The site is hosted on
          Heroku, and uses an S3 bucket to store the gallery images.
        </P>
        <H1>Features</H1>
        <P>
          I consulted with Sandy about the website design and drew up a Balsamiq
          wireframe that included an image gallery featuring a lightbox popup,
          which was implemented using Lightbox2. I find that the lightbox really
          helps to show the detail in his work.
        </P>
        <Video controls loop muted playsinline src={gallery} />
        <P>
          In order to upload examples of his work whenever he needed, a drag and
          drop file uploader interface was utilized. I chose to use Uppy, an
          open source implementation found on npm.
        </P>
        <Video controls loop muted playsinline src={addImage} />
        <P>
          Of course, it was necessary to use authentication so that only Sandy
          was able to upload, edit and delete images. This was accomplished
          using PassportJS.
        </P>
        <Video controls loop muted playsinline src={login} />
        <P>
          When logged in, the image gallery is editable, with the ability to
          edit image metadata, delete images, and rearrange images
          (implementation borrowed heavily from this Codepen). Along with
          uploading, these features allow Sandy to manage the gallery entirely
          on his own.
        </P>
        <Video controls loop muted playsinline src={editImage} />
        <Video controls loop muted playsinline src={deleteImage} />
        <Video controls loop muted playsinline src={galleryEdit} />
        <P>
          The email popup form allows customers to easily contact Sandy about
          purchasing pieces of artwork. Implementing an e-commerce checkout page
          was discussed as an enhancement, but Sandy felt that it was easier for
          him to deal with sales via email.
        </P>
        <Video controls loop muted playsinline src={email} />
        <H1>Challenges</H1>
        <P>
          I had to learn how to use webpack in order to bundle only the required
          Uppy modules, instead of downloading the entire Uppy library via CDN.
          Working with Uppy documentation was a good learning experience as
          prior to this I had relied more on third-party information sources
          such as Youtube, or tutorials. This experience gave me the confidence
          to go directly to the documentation first, which saved me a lot of
          time moving forward.
        </P>
        <P>
          Image processing and storage - Heroku was chosen for quick deployment,
          but I didn’t realize that heroku’s filesystem is ephemeral. While it
          is possible to store images in a relational database, the prevailing
          wisdom is that this is bad practice. The image files that Sandy was
          uploading were far too big for thumbnails, causing slow page
          rendering. I used sharp module to resize the images into a small
          version for gallery, and a large version for lightbox. Multer
          processes the multipart form data sent from Uppy, sharp processes each
          image, and the images are sent to a private S3 bucket to be hosted
          there. The URL and image metadata are stored in the mySQL database
          hosted in the ClearDB Heroku addon.
        </P>
        <P>
          A lot of CSS was being duplicated across pages, and I initially wanted
          to break it into multiple files and link them in the HTML document,
          but this can slow down page rendering. I took this opportunity to
          learn a CSS preprocessor, choosing Sass. Writing all the styling using
          Sass kept the code more modular and the website theming consistent
          across all pages.
        </P>
        <H1>Outcome</H1>
        <P>
          Sandy was very happy with the styling of the website, having only
          positive things to say. After some early technical difficulties with
          image uploading and editing, he started to get the hang of it and he
          is now able to manage the site on his own and add new items at his
          convenience.
        </P>
      </ContentWrapper>
    </section>
  );
}

DeafFireArt.propTypes = {
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default DeafFireArt;
