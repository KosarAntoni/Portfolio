import styled from 'styled-components';

const SocialLink = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  
  :before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${({ icon }) => icon}) no-repeat 50% 50%;
    mask-size: 2.5rem;
    background-color: ${({ theme }) => theme.secondary};
    transition: all 0.3s;
  }

  :hover,
  :focus {
    ::after {
      opacity: 0.1;
    }
    
    ::before{
      background-color: ${({ theme }) => theme.grey};
    }
  }

`;

export default SocialLink;
