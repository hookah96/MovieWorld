import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const Pagination = ({
  pageSize,
  pagesLength,
  total,
  pageIndex,
  setPaginationInfo,
  paginationInfo,
}) => {
  let arr = [];
  for (let i = 0; i < pagesLength; i++) {
    arr.push(i + 1);
  }

  const prevPage = () => {
    setPaginationInfo({ pageSize, pageIndex: Math.max(pageIndex - 1, 1) });
  };

  const nextPage = () => {
    setPaginationInfo({
      pageSize,
      pageIndex: pageIndex < pagesLength ? pageIndex : pageIndex + 1,
    });
  };

  const goToPage = (num) => {
    let newPagination = { ...paginationInfo, pageIndex: num - 1 };
    setPaginationInfo(newPagination);
  };

  const displayPagesNumbers = arr.map((num) => (
    <button key={num} onClick={() => goToPage(num)}>
      {num}
    </button>
  ));

  return (
    <div>
      <button onClick={prevPage}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {displayPagesNumbers}
      <button onClick={nextPage}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
