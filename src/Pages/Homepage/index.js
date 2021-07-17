import React, { useState, useEffect } from 'react';
import './styles.css';
import Pagination from '../../components/Pagination';
import MovieCard from '../../components/MovieCard';
import NewMovieBtn from '../../components/NewMovieBtn';
import { getAllMovies } from '../../api/getMovies';

const Homepage = ({ loggedInUserInfo, userID }) => {
  const { isLoggedIn } = loggedInUserInfo;

  const [paginationInfo, setPaginationInfo] = useState({
    pageSize: 10,
    pageIndex: 0,
  });
  const [moviesData, setMoviesData] = useState({});

  useEffect(() => {
    const movies = async () => {
      let res = await getAllMovies(paginationInfo);
      const { data } = res;

      setMoviesData(data);
    };
    movies();
  }, [paginationInfo, setMoviesData]);

  const displayCards =
    moviesData.data !== undefined &&
    moviesData.data.map((el) => (
      <MovieCard
        isLoggedIn={isLoggedIn}
        key={el.id}
        movie={el}
        userID={userID}
      />
    ));
  console.log(isLoggedIn);

  return (
    <div className='home-container'>
      <div className='home-cards-cont'>
        <p>Found {moviesData.total} movies</p>
        {displayCards}
      </div>
      {isLoggedIn && <NewMovieBtn />}
      {/* <Pagination
        pageSize={pageSize}
        pagesLength={pages_length}
        total={total}
        pageIndex={paginationInfo.pageIndex}
        paginationInfo={paginationInfo}
        setPaginationInfo={setPaginationInfo}
      /> */}
    </div>
  );
};

export default Homepage;
