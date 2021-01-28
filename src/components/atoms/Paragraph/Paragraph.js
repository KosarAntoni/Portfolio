import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
`;

export default Paragraph;
