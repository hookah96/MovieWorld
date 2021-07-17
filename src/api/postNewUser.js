import axios from 'axios';

const URL = 'http://localhost:8080/users';

export const postNewUser = async (user) => {
  const { firstName, lastName, email, password } = user;
  var res;
  try {
    res = await axios({
      method: 'post',
      url: URL,
      data: {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      },
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
  return res;
};
