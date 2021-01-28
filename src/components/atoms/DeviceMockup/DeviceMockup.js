import styled, { css } from 'styled-components';
import desktopFrame from '../../../assets/desktop.png';
import tabletFrame from '../../../assets/tablet.png';
import phoneFrame from '../../../assets/phone.png';

const DeviceMockup = styled.div`
  position: relative;
  width: 158px;
  height: 300px;
  flex-shrink: 0;

  ::after {
    display: block;
    content: '';
    position: absolute;
    background-image: url('${({ img }) => img}');
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 1;

    width: 127px;
    height: 246px;
    top: 41px;
    left: 16px;
  }
  
  ::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 2;

    background-image: url(${phoneFrame});
  }
  
  ${({ desktop }) => desktop && css`
    width: 436px;
    height: 250px;
    
    ::after {
      width: 338px;
      height: 212px;
      top: 16px;
      left: 49px;
    }

    ::before {
      background-image: url(${desktopFrame});
    }
  `} 
  
  ${({ tablet }) => tablet && css`
    width: 259px;
    height: 200px;
    
    ::after {
      width: 243px;
      height: 183px;
      top: 9px;
      left: 8px;
    }

    ::before {
      background-image: url(${tabletFrame});
    }
  `}
`;

export default DeviceMockup;
