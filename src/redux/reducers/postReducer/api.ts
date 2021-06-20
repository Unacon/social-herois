async function getGithubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();

  return user;
}

const loginAPI = {
  getGithubUser,
};

export default loginAPI;
