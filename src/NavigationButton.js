import React from 'react';
import { withRouter } from 'react-router-dom';

const NavButton = ({ url, disabled, text, history }) => {
  const navigate = nextUrl => history.push(nextUrl);
  return (
    <button type="button" disabled={disabled} onClick={() => navigate(url)}>
      {text}
    </button>
  );
};

export default withRouter(NavButton);
