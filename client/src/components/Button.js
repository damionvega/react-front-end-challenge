import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

export default props => {
  return (
    <Button type="button" {...props}>
      {props.children || 'Submit'}
    </Button>
  );
};

const Button = styled.button`
  color: ${props => props.theme.buttonColor || theme.buttonColor};
  background: ${props => props.theme.buttonBg};
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 2rem;
  cursor: pointer;
  outline: none;
`;
