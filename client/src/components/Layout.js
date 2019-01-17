import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import AdminToggle from './AdminToggle';
import Button from './Button';
import PostsContainer from '../containers/PostsContainer';
import theme from '../styles/theme';

import Modal from './Modal';
import CreatePost from './CreatePost';

class Layout extends Component {
  state = {
    isModalVisible: false,
  };

  onLogoClick = () => {
    this.props.history.push('/');
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    // Check if we're viewing a post to enable editing if needed
    const isViewingPostDetail = /\/posts\/\d/.test(
      this.props.location.pathname,
    );

    return (
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <Modal show={this.state.isModalVisible} onClose={this.toggleModal}>
            <CreatePost />
          </Modal>

          <Header>
            <div className="logo-wrap" onClick={this.onLogoClick}>
              <img src="/cluster-logo-black.png" alt="company logo" />
              <h2 className="cursive">Blog</h2>
            </div>

            <ButtonWrap>
              {isViewingPostDetail ? (
                <AdminToggle />
              ) : (
                <Button onClick={this.toggleModal}>Create Post</Button>
              )}
            </ButtonWrap>
          </Header>

          <Content>
            {React.cloneElement(this.props.children || <PostsContainer />)}
          </Content>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

export default Layout;

const StyledLayout = styled.div`
  min-height: ${props => {
    var height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return `${height}`;
  }};
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${props => props.theme.grey};
  background: white;
  z-index: 9;

  .logo-wrap {
    display: flex;
    justify-content: center;
    max-width: 20rem;
    margin: 0.4rem auto 0;
    cursor: pointer;
  }

  img {
    object-fit: contain;
  }

  h2 {
    margin: 2.75rem 0 0 0.5rem;
  }
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 2rem;
  right: 8rem;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin: 0 auto;
  padding: 10rem 0;
  max-width: 80vw;
`;
