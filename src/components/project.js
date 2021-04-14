import styled from 'styled-components';

const StyledProject = styled.div``;
const Project = ({
  matter: { date, title, source, website, tech },
  content,
}) => {
  return (
    <StyledProject>
      <h3>{title}</h3>
      <div>{content}</div>
      <div>{tech.join(', ')}</div>
    </StyledProject>
  );
};

export default Project;
