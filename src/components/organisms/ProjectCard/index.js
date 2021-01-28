import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import Content from './Content';
import animation from './animation';
import CardHeading from './Heading';
import MenuToggle from '../../atoms/MenuToggle/MenuToggle';
import DevicesMockup from '../../molecules/DevicesMockup/DevicesMockup';

const Wrapper = styled.div`
  position: relative;
  height: 34rem;
  width: 100%;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  cursor: zoom-out;
  visibility: ${({ isSelected }) => (isSelected ? 'visible' : 'hidden')};
  background: rgba(0, 0, 0, 0.4);
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: rgba(0, 0, 0, 0);
  z-index: 1;
  
  ${({ isSelected }) => isSelected && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 10;
    padding: 1.5rem;
    
    @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
      padding: 4.5rem;
    }
  `}
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  width: 100%;
  max-width: 70rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  z-index: 1;
  transition: z-index 0.1s 0.8s;
  background: ${({ background }) => background};

  ${({ isSelected }) => isSelected && css`
    cursor: initial;
    height: auto;
    margin: auto;

    z-index: 10;

  `}
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  
  transform: translateY(${({ isSelected }) => (isSelected ? '0%' : '-200%')});
  transition: all 0.3s;
  z-index: 3;

`;

const DevicesMockupWrapper = styled(motion.div)`
  position: absolute;
  top: 2rem;
  
  margin: 6rem auto 3rem;
  width: 30rem;
  height: 30rem;
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport4}px) {
    width: 40rem;
  }  
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    width: 50rem;
  }
`;

const ProjectCard = ({
  images,
  technologies,
  title,
  content,
  links,
  background,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isWide, setIsWide] = useState(false);
  // const zIndex = useMotionValue(isSelected ? 2 : 0);
  const ref = useRef();
  // const history = useHistory();
  useEffect(() => {
    if (ref.current.clientWidth > 400) setIsWide(true);
  }, [ref]);

  // const checkZIndex = (latest) => {
  //   console.log(latest);
  //   if (isSelected) {
  //     zIndex.set(10);
  //   } else if (!isSelected && latest.opacity !== 1.01) {
  //     zIndex.set(0);
  //   }
  // };

  // const handleOpen = () => {
  //   const { scrollY } = window;
  //
  //   history.push(`/${id}`);
  //
  //   document.body.style.position = 'fixed';
  //   document.body.style.top = `-${scrollY}px`;
  // };

  // const handleClose = () => {
  //   const scrollY = parseInt(document.body.style.top, 10);
  //
  //   ref.current.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  //   history.replace('/');
  //
  //   document.body.style.position = '';
  //   document.body.style.top = '';
  //   window.scrollTo(0, -(scrollY || 0));
  // };

  return (
    <Wrapper
      ref={ref}
    >
      <ContentWrapper
        layout
        transition={animation}
        isSelected={isSelected}
      >
        <Overlay
          isSelected={isSelected}
          onClick={() => setIsSelected(false)}
        />
        <ContentContainer
          onClick={isSelected ? null : () => setIsSelected(true)}
          isSelected={isSelected}
          layout
          transition={animation}
          background={background}
        >
          <CloseButtonWrapper
            isSelected={isSelected}
            onClick={() => setIsSelected(false)}
          >
            <MenuToggle isOpen />
          </CloseButtonWrapper>
          <CardHeading
            title={title}
            technologies={technologies}
          />

          <DevicesMockupWrapper
            layout
            transition={animation}
            isSelected={isSelected}
            initial={isWide ? { x: 100, y: -60 } : { x: 0, y: 0 }}
            animate={!isWide || isSelected
              ? { x: 0, y: 0, scale: 1 } : { x: 100, y: -60, scale: 0.9 }}
          >
            <DevicesMockup
              desktop={images.desktop}
              tablet={images.tablet}
              mobile={images.mobile}
              isOpen={isWide || isSelected}
            />
          </DevicesMockupWrapper>

          <Content
            isOpen={isSelected}
            content={content}
            links={links}
            images={images}
          />
        </ContentContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

ProjectCard.propTypes = {
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  background: PropTypes.string,
  // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
  // isSelected: PropTypes.bool,
};

ProjectCard.defaultProps = {
  // isSelected: false,
  background: '#fff',
};

export default ProjectCard;
