import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return <React.Fragment>{isMobile && children}</React.Fragment>;
};
const Tablet: React.FC = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 426, maxWidth: 800 });
  return <React.Fragment>{isTablet && children}</React.Fragment>;
};
const PC: React.FC = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:768px) ',
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export { Mobile, Tablet, PC };
