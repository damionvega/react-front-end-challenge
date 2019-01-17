import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const CommentListItem = ({
  comment: { id, body },
  canDelete,
  deleteComment,
}) => {
  return (
    <CommentStyled>
      <p>{body}</p>

      {canDelete && (
        <Button onClick={() => deleteComment(id)} theme={{ buttonBg: 'red' }}>
          Delete
        </Button>
      )}
    </CommentStyled>
  );
};

CommentListItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

const CommentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 1rem 0;
  background: whitesmoke;
  border: 1px solid ${props => props.theme.grey};

  span {
    font-size: 2rem;
  }
`;

export default CommentListItem;
