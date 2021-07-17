import axios from 'axios';
import moment from 'moment';

const URL = 'http://localhost:8080/movies';

export const postNewMovie = async (newMovie, userID, token) => {
  let res;
  const config = JSON.stringify({
    Authorization: token,
  });
  const { title, description } = newMovie;
  try {
    res = await axios({
      method: 'post',
      url: URL,
      headers: { config },
      data: {
        title,
        description,
        likes: 0,
        hates: 0,
        user_id: userID,
        upload_date: moment().format('YYYY-MM-DD'),
      },
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  console.log(res);

  return res;
};
