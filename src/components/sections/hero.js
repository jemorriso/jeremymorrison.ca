import styled from 'styled-components';
import Link from 'next/link';
import emoji from 'emoji-dictionary';
// import HeroContent from '@content/hero.mdx';
import Image from 'next/image';

const imageDim = 500;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  /* padding: 0; */
  padding-top: 70px;

  .contactButtonContainer {
    padding-top: 60px;
    padding-left: 50px;
    font-size: var(--font-size-xxl);
  }
`;

const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  /* width: 50%; */

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
