import axios from 'axios';

const URL = 'http://localhost:8080/auth/login';

export const loginUser = async (info) => {
  const { email, password } = info;
  var res;
  try {
    res = await axios({
      method: 'post',
      url: URL,
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  return res;
};
