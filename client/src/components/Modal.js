import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <ModalStyled>
      <div className="content">
        {props.children}

        <Button onClick={props.onClose}>&times;</Button>
      </div>
    </ModalStyled>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

const ModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);

  .content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 60%;
    background: white;
    border-radius: 6px;
    margin: 0 auto;
    padding: 30;

    & > button {
      position: absolute;
      top: 0;
      right: 1rem;
      color: black;
      font-size: 5rem;
      background: none;
    }
  }
`;

export default Modal;
