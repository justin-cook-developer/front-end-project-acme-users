import React from 'react';

import NavButton from './NavigationButton';

const Pager = ({ pageNumber, lastPage }) => {
  const onFirstPage = pageNumber === 1;
  const onLastPage = pageNumber >= lastPage;
  return (
    <div>
      <NavButton disabled={onFirstPage} text="First Page" url="/users/1" />
      <NavButton
        disabled={onFirstPage}
        text="Prior Page"
        url={`/users/${pageNumber - 1}`}
      />
      <span>{pageNumber}</span>
      <NavButton
        disabled={onLastPage}
        text="Next Page"
        url={`/users/${pageNumber + 1}`}
      />
      <NavButton
        disabled={onLastPage}
        text="Last Page"
        url={`/users/${lastPage}`}
      />
    </div>
  );
};

export default Pager;
