import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCard from '../organisms/ProjectCard';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
  width: 100%;
  padding: 0 1.5rem;
  margin: 2rem 0;
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    padding: 0 4.5rem;
  }
`;

const Grid = styled.div`
  max-width: 1170px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport12}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ItemWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport7}px) {
    :nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
    }

    :nth-child(2) {
      grid-area: 1 / 2 / 2 / 4;
    }

    :nth-child(4) {
      grid-area: 3 / 1 / 4 / 3;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.viewPorts.viewport12}px) {
    :nth-child(1) {
      grid-area: 1 / 1 / 3 / 2;
    }

    :nth-child(2) {
      grid-area: 1 / 2 / 2 / 4;
    }

    :nth-child(4) {
      grid-area: 2 / 3 / 3 / 5;
    }

    :nth-child(5) {
      grid-area: 3 / 1 / 4 / 3;
    }
  };
`;

const GridTemplate = ({ projects }) => (
  <Wrapper>
    <Grid>
      <ItemWrapper />
      {projects.map((i) => (
        <ItemWrapper
          key={i.id}
        >
          <ProjectCard
            content={i.content}
            technologies={i.technologies}
            title={i.title}
            images={i.images}
            links={i.links}
            background={i.background}
          />
        </ItemWrapper>

      ))}
    </Grid>
  </Wrapper>
);

GridTemplate.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.objectOf(PropTypes.string),
        PropTypes.string,
        PropTypes.number,
        PropTypes.arrayOf(
          PropTypes.objectOf(PropTypes.string),
        ),
      ]),
    ),
  ).isRequired,
};

export default GridTemplate;
