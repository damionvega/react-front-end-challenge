import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import PostListItem from './PostListItem';

const PostList = props => {
  const { posts } = props;

  return posts && posts.length ? (
    <PostListStyled>
      {posts.map(post => (
        <PostListItem key={post.id} history={props.history} post={post} />
      ))}
    </PostListStyled>
  ) : (
    <h2>No posts found!</h2>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};

const PostListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  margin: 0 auto;
`;

export default PostList;
