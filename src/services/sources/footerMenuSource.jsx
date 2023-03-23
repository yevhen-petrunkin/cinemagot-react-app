import {
  FaPhoneSquareAlt,
  FaTelegram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa';

export const footerMenuLinks = [
  {
    id: 'phone',
    icon: <FaPhoneSquareAlt style={{ width: '100%', height: '100%' }} />,
    link: 'tel:+380962978729',
  },
  {
    id: 'telegram',
    icon: <FaTelegram style={{ width: '100%', height: '100%' }} />,
    link: 'https://t.me/yevhen_petrunkin',
  },
  {
    id: 'linkedin',
    icon: <FaLinkedin style={{ width: '100%', height: '100%' }} />,
    link: 'https://www.linkedin.com/in/yevhen-petrunkin/',
  },
  {
    id: 'github',
    icon: <FaGithub style={{ width: '100%', height: '100%' }} />,
    link: 'https://github.com/yevhen-petrunkin/cinemagot-react-app',
  },
  {
    id: 'facebook',
    icon: <FaFacebook style={{ width: '100%', height: '100%' }} />,
    link: 'https://www.facebook.com/profile.php?id=100011788286630',
  },
];
