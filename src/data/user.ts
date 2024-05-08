import axios from 'axios';

async function fetchUser({ email, password }: IFetchUserPayload) {
  try {
    const user = await axios.post('https://www.revrecycle.com/login', {
      email,
      password,
    });
    return user;
  } catch (err) {
    throw new Error('Invalid credentials.');
  }
}

export { fetchUser };
