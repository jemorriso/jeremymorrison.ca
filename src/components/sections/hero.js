import styled from 'styled-components';
import HeroContent from '@content/hero.mdx';
import Image from 'next/image';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const StyledHeroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  width: 50%;

  & > div {
    grid-row: 1/ 2;
  }

  & > .content {
    grid-column: 1/4;
    z-index: 2;
    align-self: flex-end;
  }
`;

const StyledImage = styled.div`
  grid-column: 3/-1;
`;

const Hero = () => {
  return (
    <StyledHeroSection>
      <StyledHeroContainer>
        <div className="content">
          <HeroContent />
        </div>
        <StyledImage>
          <Image src="/meinahat.jpg" alt="Avatar" width={250} height={250} />
        </StyledImage>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export default Hero;
