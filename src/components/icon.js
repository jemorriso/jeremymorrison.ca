import { Github, Linkedin, Instagram } from '@styled-icons/fa-brands';
import { LinkExternal } from '@styled-icons/octicons';

const Icon = ({ name, size = 30 }) => {
  switch (name) {
    case 'Github':
      return <Github size={size} />;
    case 'Linkedin':
      return <Linkedin size={size} />;
    case 'Instagram':
      return <Instagram size={size} />;
    case 'LinkExternal':
      return <LinkExternal size={size} />;
    default:
      return <div>foo</div>;
  }
};

export default Icon;
