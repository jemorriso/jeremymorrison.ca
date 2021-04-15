import styled from 'styled-components';
import { Section, Icon } from '@components';
import { email, socialMedia } from '@config';

const StyledContactSection = styled.section`
  padding-bottom: 50px;

  .contact-info {
    ${({ theme }) => theme.mixins.flexBetween};
    display: flex;
    padding: 0 20px;
  }

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    margin: 0 5px;
  }
`;

const Contact = () => {
  return (
    <StyledContactSection>
      <Section id="contact">
        <h2>Contact</h2>
        <div className="contact-info">
          <div>{email}</div>
          <ul>
            {socialMedia.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} target="_blank">
                  <Icon name={name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </StyledContactSection>
  );
};

export default Contact;
