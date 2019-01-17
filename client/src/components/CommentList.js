import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';
import CommentListItem from './CommentListItem';

class CommentList extends Component {
  state = {
    commentText: '',
  };

  onChange(event) {
    this.setState({
      commentText: event.target.value,
    });
  }

  createComment(event) {
    event.preventDefault();

    const { commentText } = this.state;

    if (commentText.trim() != null) {
      this.props.createComment(this.props.postId, commentText.trim());
    this.setState({
      commentText: '',
    });
    }
  }

  deleteComment(commentId) {
    this.props.deleteComment(commentId);
  }

  render() {
    const { comments, userRoles } = this.props;

    return (
      <CommentListStyled>
        <Form onSubmit={event => this.createComment(event)}>
          <fieldset>
            <label htmlFor="comment">
              Leave a comment!
              <textarea
                type="text"
                id="comment"
                name="comment"
                placeholder="Type your comment..."
                required
                value={this.state.commentText}
                onChange={event => this.onChange(event)}
              />
            </label>

            <Button type="submit">Submit</Button>
          </fieldset>
        </Form>

        {comments.map((comment, index) => (
          <CommentListItem
            key={index}
            comment={comment}
            canDelete={userRoles.length && userRoles.includes('EDITOR')}
            deleteComment={commentId => this.deleteComment(commentId)}
          />
        ))}
      </CommentListStyled>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      postId: PropTypes.number.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
  userRoles: PropTypes.arrayOf(PropTypes.string),
};

const CommentListStyled = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const Form = styled.form`
  width: 50vw;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  margin: 0 auto 4rem;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;

  label {
    display: block;
    text-align: center;
  }

  textarea {
    width: 100%;
    height: 4rem;
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem 0;
    border: 1px solid ${props => props.theme.grey};
    border-radius: 3px;

    &:focus {
      outline: 0;
    }
  }

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      height: 10px;
      content: '';
      display: block;
    }
  }
`;

export default CommentList;
