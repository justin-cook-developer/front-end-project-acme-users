import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import api from './users-api';
import Table from './Table';
import Pager from './Pager';

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
    if (page === '1' || page === undefined) {
      return '';
    } else {
      return `/${page - 1}`;
    }
  };

  fetchData = async url => {
    try {
      const { data } = await api.get(url);
      const { users, count } = data;
      const lastPage = Math.ceil(count / 50);
      const page = this.props.match.params.page;
      if (page > lastPage) {
        this.props.history.push(`/users/${lastPage}`);
        return;
      }
      this.setState({ users, count });
    } catch (e) {
      console.error(e);
    }
  };

  getPageNumber = () => parseInt(this.props.match.params.page, 10) || 1;

  render() {
    const { count, users } = this.state;
    const pageNumber = this.getPageNumber();
    const lastPage = Math.ceil(count / 50);
    return (
      <main>
        <p>
          {count} Results. Page {pageNumber} of {lastPage}.
        </p>
        <Pager pageNumber={pageNumber} lastPage={lastPage} />
        <div>Search: Todo</div>
        <Table users={users} />
      </main>
    );
  }
}

export default withRouter(Users);
