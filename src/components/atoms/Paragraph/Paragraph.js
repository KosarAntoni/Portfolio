import styled from 'styled-components';

const Paragraph = styled.p`
  white-space: pre-line;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
  width: 100%;
`;

export default Paragraph;
