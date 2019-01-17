import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import { fetchPost, updatePost } from '../store/post/actions';
import { createComment, deleteComment } from '../store/comment/actions';
import CommentList from '../components/CommentList';
import PostDetail from '../components/PostDetail';
import Loading from '../components/Loading';

class PostDetailContainer extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  updatePost(post) {
    this.props.updatePost(post);
  }

  createComment(postId, commentBody) {
    this.props.createComment(postId, commentBody);
  }

  deleteComment(commentId) {
    this.props.deleteComment(commentId);
  }

  render() {
    const { isFetching, post, comments, userRoles } = this.props;

    if (isFetching || !post) {
      return <Loading />;
    } else {
      return (
        <PostWrapStyled>
          <PostDetail
            post={post}
            updatePost={post => this.updatePost(post)}
            canEdit={userRoles.length && userRoles.includes('EDITOR')}
          />

          <CommentList
            comments={comments}
            postId={post.id}
            createComment={(postId, commentBody) =>
              this.createComment(postId, commentBody)
            }
            deleteComment={commentId => this.deleteComment(commentId)}
            userRoles={userRoles}
          />
        </PostWrapStyled>
      );
    }
  }
}

const PostWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = state => ({
  post: state.post.post,
  postIsFetching: state.post.isFetching,
  comments: state.comment.comments,
  userRoles: state.user.roles,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { fetchPost, updatePost, createComment, deleteComment },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetailContainer);
