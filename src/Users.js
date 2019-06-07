import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import api from './users-api';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      count: null,
    };
  }

  componentDidMount() {
    this.fetchData(this.getAdditionalUrl());
  }

  componentDidUpdate(previousProps) {
    if (this.props.match.params.page !== previousProps.match.params.page) {
      this.fetchData(this.getAdditionalUrl());
    }
  }

  getAdditionalUrl = () => {
    const { page } = this.props.match.params;
    const additionalUrl = page ? `/${page}` : '';
    return additionalUrl;
  };

  fetchData = async url => {
    try {
      const { data } = await api.get(url);
      console.log(data);
      const { users, count } = data;
      this.setState({ users, count });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { count, users } = this.state;
    return (
      <main>
        <div>{count}</div>
        <div>{users.length}</div>
      </main>
    );
  }
}

export default withRouter(Users);
