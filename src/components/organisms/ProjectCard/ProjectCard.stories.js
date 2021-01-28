import React from 'react';
import ProjectCard from './index';
import laptopScreenshot from '../../../assets/Zrzut ekranu 2021-01-25 o 17.04.50.png';
import tabletScreenshot from '../../../assets/iPad.png';
import mobileScreenshot from '../../../assets/iPhone.png';
import reactIcon from '../../../assets/icons/react-brands.svg';
import atomicIcon from '../../../assets/icons/atomics-design.svg';

export default {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: {
    desktop: laptopScreenshot,
    tablet: tabletScreenshot,
    mobile: mobileScreenshot,
  },
  technologies: [
    {
      icon: reactIcon,
      name: 'React',
    },
    {
      icon: atomicIcon,
      name: 'Atomic Design',
    },
  ],
  title: 'Lorem ipsum',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam\n'
    + 'atque doloribus eos facilis laudantium libero natus odit quas voluptate?',
  links: {
    live: 'https://www.google.pl/',
    code: 'https://www.google.pl/',
  },
};
