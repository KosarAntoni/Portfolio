import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import Content from './Content';
import animation from './animation';
import CardHeading from './Heading';

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

  ${({ isSelected }) => isSelected && css`
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    z-index: 1;

    @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
      padding: 4rem;
    }
  `}
`;

const ContentContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 60rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 4px 0.75rem rgba(0, 0, 0, .2);
  z-index: 5;

  ${({ isSelected }) => isSelected && css`
    cursor: initial;
    height: auto;
    margin: auto;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const ProjectCard = ({
  images,
  technologies,
  title,
  content,
  links,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  const ref = useRef();
  // const history = useHistory();

  const checkZIndex = (latest) => {
    if (isSelected) {
      zIndex.set(10);
    } else if (!isSelected && latest.opacity !== 1.01) {
      zIndex.set(0);
    }
  };

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
    <Wrapper>
      <ContentWrapper
        layout
        isSelected={isSelected}
      >
        <Overlay
          isSelected={isSelected}
          onClick={() => setIsSelected(false)}
        />
        <ContentContainer
          ref={ref}
          initial={false}
          onClick={isSelected ? null : () => setIsSelected(true)}
          isSelected={isSelected}
          layout
          style={{ zIndex }}
          transition={animation}
          onUpdate={checkZIndex}
        >
          <CardHeading
            isSelected={isSelected}
            title={title}
            technologies={technologies}
            handleClose={() => setIsSelected(false)}
          />
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
  // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  links: PropTypes.objectOf(PropTypes.string).isRequired,
  // isSelected: PropTypes.bool,
};

// ProjectCard.defaultProps = {
//   isSelected: false,
// };

export default ProjectCard;
