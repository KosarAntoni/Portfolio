import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.s)};
  font-weight:  ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.primary};
  font-family: 'Nunito', sans-serif;
`;

export default Heading;
