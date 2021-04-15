import styled from 'styled-components';
import Link from 'next/link';
import emoji from 'emoji-dictionary';
import Image from 'next/image';

const imageDim = 500;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  padding-top: 90px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  .contactButtonContainer {
    padding: 60px 100px;
    font-size: var(--font-size-xxl);
    font-weight: 600;
    align-self: flex-start;

    @media (max-width: 768px) {
      padding: 0;
    }
  }
`;

const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;

  & > div {
    grid-row: 1/ 2;
  }

  & > .content {
    grid-column: 1/4;
    z-index: 2;
    align-self: flex-end;
    margin-bottom: 20px;
    font-size: var(--font-size-xl);
  }

  & > .content li {
    list-style-type: disclosure-closed;
  }

  & h1 {
    font-size: var(--font-size-heading);
  }

  ul {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
  }
`;

const StyledImage = styled.div`
  grid-column: 3/-1;
  max-width: 700px;
  justify-self: end;

  & img {
    filter: brightness(50%);
    border-radius: 25px;
  }
`;

const Hero = ({ content }) => {
  return (
    <StyledHeroSection>
      <div>
        <StyledHeroContainer>
          <div className="content">{content}</div>
          <StyledImage>
            <Image
              src="/meinahat.jpg"
              alt="Avatar"
              width={imageDim}
              height={imageDim}
            />
          </StyledImage>
        </StyledHeroContainer>
      </div>
      <div className="contactButtonContainer">
        {emoji.getUnicode('point_right')}{' '}
        <button>
          <Link href="/#contact">
            <em>Let's Work Together!</em>
          </Link>
        </button>
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
