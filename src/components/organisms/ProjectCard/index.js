import React, {
  useEffect, useRef, useState,
} from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
  z-index: 1;

  ${({ isSelected }) => isSelected && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 10;
  `}
`;

const ContentScrollContainer = styled(motion.div)`
  position: relative;
  transition: z-index 0.1s 0.8s;
  z-index: 1;
  height: fit-content;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }

  ${({ isSelected }) => isSelected && css`
    height: auto;
    overflow: auto;
    z-index: 10;
    padding: 8rem 1.5rem 1.5rem;
  `}
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
  width: 100%;
  max-width: 74rem;
  height: 34rem;
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  background: ${({ background }) => background};
  overflow: hidden;
  
  ${({ isSelected }) => isSelected && css`
    cursor: initial;
    height: auto;
    margin: auto;
  `}
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  
  transform: translateY(${({ isSelected }) => (isSelected ? '0%' : '-200%')});
  transition: all 0.3s;
  z-index: 3;

  path {
    stroke: ${({ theme }) => theme.primary}
  }
  
`;

const DevicesMockupWrapper = styled(motion.div)`
  position: absolute;
  top: 2rem;
  
  margin: 6rem auto 3rem;
  width: 30rem;
  height: 30rem;
  z-index: 5;
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport4}px) {
    width: 40rem;
  }  
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    width: 50rem;
  }
`;

const ProjectCard = ({
  id,
  images,
  technologies,
  title,
  content,
  links,
  background,
  isSelected,
}) => {
  const [isWide, setIsWide] = useState(null);
  const ref = useRef(null);
  const history = useHistory();

  const scrollLock = () => {
    const { scrollY } = window;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
  };

  const scrollUnlock = () => {
    const scrollY = parseInt(document.body.style.top, 10);
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, -(scrollY || 0));
  };

  useEffect(() => {
    if (isSelected) scrollLock();
    if (ref.current.clientWidth > 400) setIsWide(true);
    if (ref.current.clientWidth <= 400) setIsWide(false);
  }, [ref, isSelected]);

  const handleOpen = () => {
    history.push(`/${id}`);
  };

  const handleClose = () => {
    scrollUnlock();
    history.replace('/');
  };

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
          onClick={() => handleClose()}
        />
        <ContentScrollContainer
          isSelected={isSelected}
          layout
          transition={animation}
        >
          <ContentContainer
            onClick={isSelected ? null : () => handleOpen()}
            isSelected={isSelected}
            layout
            transition={animation}
            background={background}
          >
            <CloseButtonWrapper
              isSelected={isSelected}
              onClick={() => handleClose()}
            >
              <MenuToggle isOpen />
            </CloseButtonWrapper>
            <CardHeading
              title={title}
              technologies={technologies}
            />
            {ref.current
            && (
            <DevicesMockupWrapper
              layout
              transition={animation}
              isSelected={isSelected}
              initial={false}
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
            )}

            <Content
              isOpen={isSelected}
              content={content}
              links={links}
              images={images}
            />
          </ContentContainer>
        </ContentScrollContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

ProjectCard.propTypes = {
  images: PropTypes.objectOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  background: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
  isSelected: PropTypes.bool,
};

ProjectCard.defaultProps = {
  isSelected: false,
  background: '#fff',
};

export default ProjectCard;
