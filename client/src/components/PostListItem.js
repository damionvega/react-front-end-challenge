import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PostListItem = props => {
  console.log('props.post', props.post);
  const {
    post: { id, title, body },
  } = props;

  const handleClick = () => {
    props.history.push(`/posts/${id}`, { post: props.post });
  };

  const trimmedBody = () => {
    if (body.length <= 90) {
      return body;
    }

    const trimmed = body.slice(0, 90);
    return `${trimmed}...`;
  };

  return (
    <PostListItemStyled onClick={handleClick}>
      <img src="https://picsum.photos/300/200/?random" alt="Post" />

      <div className="content">
        <h2>{title}</h2>
        <p>{trimmedBody()}</p>
      </div>
    </PostListItemStyled>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

const PostListItemStyled = styled.div`
  border-radius: 6px;
  box-shadow: ${props => props.theme.boxShadow};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.025);
  }

  .content {
    padding: 0 1.5rem;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px 6px 0 0;
  }
`;

export default PostListItem;
