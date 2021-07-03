async function getPosts() {
  const response = await fetch(`http://localhost:8080/posts`);
  const posts = await response.json();

  return posts;
}

const postsAPI = {
  getPosts,
};

export default postsAPI;
