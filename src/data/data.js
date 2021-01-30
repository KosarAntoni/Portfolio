import reactIcon from '../assets/icons/react-brands.svg';
import atomicIcon from '../assets/icons/atomics-design.svg';
import cssIcon from '../assets/icons/css3-alt-brands.svg';
import framerIcon from '../assets/icons/framer.svg';
import jsIcon from '../assets/icons/js-square-brands.svg';
import styledIcon from '../assets/icons/nail-polish-svgrepo-com.svg';
import reactRouterIcon from '../assets/icons/react-router.svg';
import reduxIcon from '../assets/icons/redux.svg';
import htmlIcon from '../assets/icons/html5-brands.svg';
import formikIcon from '../assets/icons/formikIcon.svg';

import favnoteDesktop from '../assets/pictures/favnoteDesktop.png';
import favnoteTablet from '../assets/pictures/favnoteTablet.png';
import favnoteMobile from '../assets/pictures/favnoteMobile.png';

import lotosDesktop from '../assets/pictures/lotosDesktop.png';
import lotosTablet from '../assets/pictures/lotosTablet.png';
import lotosMobile from '../assets/pictures/lotosMobile.png';

import simplePortfolioDesktop from '../assets/pictures/simplePortfolioDesktop.png';
import simplePortfolioTablet from '../assets/pictures/simplePortfolioTablet.png';
import simplePortfolioMobile from '../assets/pictures/simplePortfolioMobile.png';

import hotelCatsDesktop from '../assets/pictures/hotelCatsDesktop.png';
import hotelCatsTablet from '../assets/pictures/hotelCatsTablet.png';
import hotelCatsMobile from '../assets/pictures/hotelCatsMobile.png';

import snakeDesktop from '../assets/pictures/snakeDesktop.png';
import snakeTablet from '../assets/pictures/snakeTablet.png';
import snakeMobile from '../assets/pictures/snakeMobile.png';

export const projects = [
  {
    id: 0,
    images: {
      desktop: lotosDesktop,
      tablet: lotosTablet,
      mobile: lotosMobile,
    },
    technologies: [
      {
        icon: reactIcon,
        name: 'React',
      },
      {
        icon: reactRouterIcon,
        name: 'React Router',
      },
      {
        icon: reactIcon,
        name: 'React Transition Group',
      },
      {
        icon: cssIcon,
        name: 'CSS modules',
      },
      {
        icon: formikIcon,
        name: 'Formik',
      },
    ],
    title: 'Lotos',
    content: '',
    links: {
      live: 'https://lotos-yoga.netlify.app/',
      code: 'https://github.com/KosarAntoni/Lotos',
    },
    background: 'linear-gradient(45deg,#ff9a9e 0%,#fad0c4 99%,#fad0c4 100%)',
  },
  {
    id: 1,
    images: {
      desktop: favnoteDesktop,
      tablet: favnoteTablet,
      mobile: favnoteMobile,
    },
    technologies: [
      {
        icon: reactIcon,
        name: 'React',
      },
      {
        icon: reactRouterIcon,
        name: 'React Router',
      },
      {
        icon: reduxIcon,
        name: 'Redux',
      },
      {
        icon: styledIcon,
        name: 'Styled Components',
      },
      {
        icon: framerIcon,
        name: 'Framer Motion',
      },
      {
        icon: formikIcon,
        name: 'Formik',
      },
      {
        icon: atomicIcon,
        name: 'Atomic Design',
      },
    ],
    title: 'FavNote',
    content: 'FavNote is a react-web app that allows you to save notes, twitter posts, or articles with links.\n'
    + 'You can log in using: "DemoUser" as username\n'
        + '"password" as password\n'
        + 'Note: it may take few minutes while servers starts',
    links: {
      live: 'https://favnotebykosar.netlify.app/',
      code: 'https://github.com/KosarAntoni/FavNote',
    },
    background: 'linear-gradient(to top, #edc92b 0%, #ffd829 100%)',
  },
  {
    id: 2,
    images: {
      desktop: simplePortfolioDesktop,
      tablet: simplePortfolioTablet,
      mobile: simplePortfolioMobile,
    },
    technologies: [
      {
        icon: reactIcon,
        name: 'React',
      },
      {
        icon: reactRouterIcon,
        name: 'React Router',
      },
      {
        icon: styledIcon,
        name: 'Styled Components',
      },
      {
        icon: framerIcon,
        name: 'Framer Motion',
      },
    ],
    title: 'Simple Portfolio',
    content: '',
    links: {
      live: 'https://simple-portfolio-by-kosar.netlify.app/',
      code: 'https://github.com/KosarAntoni/simple-portfolio',
    },
    background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
  },
  {
    id: 3,
    images: {
      desktop: snakeDesktop,
      tablet: snakeTablet,
      mobile: snakeMobile,
    },
    technologies: [
      {
        icon: htmlIcon,
        name: 'HTML',
      },
      {
        icon: cssIcon,
        name: 'CSS',
      },
      {
        icon: jsIcon,
        name: 'JavaScript',
      },
    ],
    title: 'Snake',
    content: '',
    links: {
      live: 'https://kosarantoni.github.io/Snake/',
      code: 'https://github.com/KosarAntoni/Snake',
    },
    background: 'linear-gradient(to top, #9EDC56 0%, #86D42B 100%)',
  },
  {
    id: 4,
    images: {
      desktop: hotelCatsDesktop,
      tablet: hotelCatsTablet,
      mobile: hotelCatsMobile,
    },
    technologies: [
      {
        icon: reactIcon,
        name: 'React',
      },
      {
        icon: reactRouterIcon,
        name: 'React Router',
      },
      {
        icon: styledIcon,
        name: 'Styled Components',
      },
      {
        icon: framerIcon,
        name: 'Framer Motion',
      },
      {
        icon: reactIcon,
        name: 'React Elastic Carousel',
      },
      {
        icon: formikIcon,
        name: 'Formik',
      },
      {
        icon: atomicIcon,
        name: 'Atomic Design',
      },
    ],
    title: 'Hotel Cats',
    content: '',
    links: {
      live: 'https://kitten-hotel4cats.netlify.app/',
      code: 'https://github.com/KosarAntoni/Hotel-Cats/',
    },
    background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  },
];

export const skills = [
  'HTML5',
  'CSS3',
  'Sass/SCSS',
  'JavaScript',
  'React',
  'Redux',
  'Framer Motion',
  'Git',
  'CSS Modules',
  'Styled Components',
  'Storybook',
  'Atomic design',
  'Formik & Yup',
];
