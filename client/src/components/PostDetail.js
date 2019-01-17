import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';

class PostDetail extends Component {
  state = {
    isEditing: false,
    title: '',
    body: '',
  };

  componentDidMount() {
    this.setState({
      title: this.props.post.title,
      body: this.props.post.body,
    });
  }

  toggleEditing() {
    if (this.props.canEdit) {
      this.setState({
        isEditing: !this.state.isEditing,
      });
    }
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSave() {
    this.toggleEditing();

    this.props.updatePost({
      id: this.props.post.id,
      title: this.state.title,
      body: this.state.body,
    });
  }

  render() {
    const { isEditing, title, body } = this.state;

    return (
      <PostDetailStyled>
        {isEditing ? (
          <PostEditStyled>
            <input
              type="text"
              name="title"
              defaultValue={title}
              value={this.state.title}
              onChange={event => this.onChange(event)}
            />
            <Button onClick={() => this.onSave()}>Save</Button>
          </PostEditStyled>
        ) : (
          <>
            {this.props.canEdit && <p className="edit">Click body to edit</p>}
            <h1 onClick={() => this.toggleEditing()}>{title}</h1>
          </>
        )}

        <img src="https://picsum.photos/1200/400/?random" alt="Post" />

        {isEditing ? (
          <PostEditStyled>
            <textarea
              name="body"
              defaultValue={body}
              value={this.state.body}
              onChange={event => this.onChange(event)}
            />
            <Button onClick={() => this.onSave()}>Save</Button>
          </PostEditStyled>
        ) : (
          <>
            {this.props.canEdit && <p className="edit">Click body to edit</p>}
            <p onClick={() => this.toggleEditing()}>{body}</p>
          </>
        )}
      </PostDetailStyled>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

const PostDetailStyled = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.grey};

  h1 {
    text-align: center;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-top: 2rem;
    border-radius: 6px;
  }

  p.edit {
    width: 20%;
    text-align: center;
    margin: 2rem auto 0;
    color: red;
    border: 1px solid red;
  }

  p {
    font-size: 1.4rem;
    margin: 3rem auto;
    padding: 1rem 5rem;
    line-height: 1.75;
  }
`;

const PostEditStyled = styled.div`
  margin-bottom: 2rem;

  input[type='text'],
  textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    margin: 1rem 0;
    border: 1px solid ${props => props.theme.grey};
    border-radius: 3px;
  }

  input[type='text'] {
    width: 100%;
    height: 2rem;
  }

  textarea {
    height: 10rem;
    margin: 1rem 0;

    &:focus {
      outline: 0;
    }
  }
`;

export default PostDetail;
