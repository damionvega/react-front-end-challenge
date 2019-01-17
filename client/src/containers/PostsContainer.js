import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { fetchAllPosts } from '../store/post/actions';
import PostList from '../components/PostList';
import Loading from '../components/Loading';

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { isFetching, history, posts } = this.props;

    if (isFetching) {
      return <Loading />;
    } else {
      return <PostList history={history} posts={posts} />;
    }
  }
}

const mapStateToProps = state => ({
  posts: state.post.posts,
  isFetching: state.post.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAllPosts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsContainer);
