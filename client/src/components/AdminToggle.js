import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Button from './Button';
import { addAuthorization, removeAuthorization } from '../store/user/actions';

class AdminToggle extends Component {
  state = {
    canEdit: this.props.userRoles.includes('EDITOR'),
  };

  toggle() {
    this.setState((state, props) => {
      const canEdit = !state.canEdit;

      if (canEdit) {
        props.addAuthorization('EDITOR');
      } else {
        props.removeAuthorization('EDITOR');
      }

      return { canEdit };
    });
  }

  render() {
    const { canEdit } = this.state;

    return (
      <Button
        onClick={() => this.toggle()}
        theme={{ buttonBg: canEdit ? 'red' : 'green' }}
      >
        {canEdit ? 'Editor' : 'Reader'}
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  userRoles: state.user.roles,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAuthorization, removeAuthorization }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminToggle);
