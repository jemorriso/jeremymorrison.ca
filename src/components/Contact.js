import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import Socials from './Socials';

const Wrapper = styled.section`
  height: 100%;
`;

const ContactSocials = styled(Socials)`
  @media (max-width: ${(props) => props.smallDeviceBreakpoint}px) {
    flex-direction: column;
  }

  & > a {
    @media (max-width: ${(props) => props.smallDeviceBreakpoint}px) {
      margin: 1rem;
    }
  }
`;
function Contact(props) {
  const { socials, smallDeviceBreakpoint } = props;
  return (
    <Wrapper>
      <SectionHeader
        title="Contact"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
      <ContactSocials
        socials={socials}
        fontSize="11rem"
        smallDeviceBreakpoint={smallDeviceBreakpoint}
      />
    </Wrapper>
  );
}

Contact.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.object).isRequired,
  smallDeviceBreakpoint: PropTypes.number.isRequired,
};

export default Contact;
