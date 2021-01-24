import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.l : theme.fontSize.s)};
  line-height: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.m)};
`;

export default Paragraph;
