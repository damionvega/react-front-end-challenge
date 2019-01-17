import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './Button';
import { createPost } from '../store/post/actions';

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
  };

  onChange(event) {
    const { target } = event;

    this.setState({
      [target.name]: target.value,
    });
  }

  createPost(event) {
    event.preventDefault();

    this.props.createPost({
      title: this.state.title,
      body: this.state.body,
    });
  }

  render() {
    return (
      <CreatePostStyled>
        <form onSubmit={event => this.createPost(event)}>
          <fieldset>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Give it a good title..."
                required
                value={this.state.title}
                onChange={event => this.onChange(event)}
              />
            </label>

            <label htmlFor="body">
              Body
              <textarea
                type="text"
                id="body"
                name="body"
                placeholder="Now write some elegant prose..."
                required
                value={this.state.body}
                onChange={event => this.onChange(event)}
              />
            </label>

            <Button type="submit">Submit</Button>
          </fieldset>
        </form>
      </CreatePostStyled>
    );
  }
}

const CreatePostStyled = styled.div`
  form {
    width: 50vw;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 5px solid white;
    margin: 6rem auto 4rem;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
  }

  label {
    display: block;
  }

  input[type='text'],
  textarea {
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
    width: 100%;
    height: 10rem;

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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createPost }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CreatePost);
