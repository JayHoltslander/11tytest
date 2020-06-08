const fetch = require('node-fetch');

module.exports = async function () {
  console.log('Fetching new github stargazers count…');

  // GitHub API: https://developer.github.com/v3/repos/#get
  const response = await fetch('https://api.github.com/repos/11ty/eleventy');

  return response.json();
};
