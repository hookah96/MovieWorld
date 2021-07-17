import axios from 'axios';

export const getAllMovies = async (pagination) => {
  const { pageSize, pageIndex } = pagination;
  var res;

  try {
    res = await axios({
      method: 'get',
      url: `http://localhost:8080/movies?pageSize=${pageSize}&pageIndex=${pageIndex}`,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  return res;
};

export const getUserMovies = async (id) => {
  var res;
  try {
    res = await axios({
      method: 'get',
      url: `http://localhost:8080/movies/${id}`,
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  return res;
};
