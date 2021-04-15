import styled from 'styled-components';
import { Github } from '@styled-icons/fa-brands';
import { LinkExternal } from '@styled-icons/octicons';

const StyledProject = styled.div`
  border-radius: 25px;
  margin: 30px;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;

  .header {
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};
    align-items: flex-start;
  }

  .footer {
    font-style: italic;
    width: 100%;
    ${({ theme }) => theme.mixins.flexBetween};
  }

  .icons {
    align-self: flex-end;
    display: flex;
  }

  .icons > * {
    margin-left: 5px;
  }

  .company {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-end;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    margin: 30px 0;
  }
`;

const genCompanyLink = (company, companyWebsite) => {
  if (typeof company !== 'undefined' && typeof companyWebsite !== 'undefined') {
    return (
      <a href={companyWebsite} target="_blank">
        {company}
      </a>
    );
  }
  return null;
};

const genDateRange = (dateString) => {
  if (typeof dateString !== 'undefined') {
    return (
      <div>
        <em>{dateString}</em>
      </div>
    );
  }
  return null;
};

const genCompany = (company, companyWebsite, dateString) => {
  return (
    <div className="company">
      {genCompanyLink(company, companyWebsite)}
      {genDateRange(dateString)}
    </div>
  );
};

const genIcons = (source, website) => {
  return (
    <div className="icons">
      {source ? (
        <a href={source} target="_blank">
          <Github size="30" />
        </a>
      ) : null}
      {website ? (
        <a href={website} target="_blank">
          {' '}
          <LinkExternal size="30" />
        </a>
      ) : null}
    </div>
  );
};

const Project = ({
  matter: {
    date,
    title,
    source,
    website,
    company,
    companyWebsite,
    tech,
    dateString,
  },
  content,
}) => {
  return (
    <StyledProject>
      <div className="header">
        <h3>{title}</h3>
        {genCompany(company, companyWebsite, dateString)}
      </div>
      <div>{content}</div>
      <div className="footer">
        <div className="tech">{tech.join(', ')}</div>
        {genIcons(source, website)}
      </div>
    </StyledProject>
  );
};

export default Project;
