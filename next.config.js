// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions) {
  const repoPath = process.env.GITHUB_REPOSITORY.split('/');
  repo = repoPath[1];
}
module.exports = {
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
  trailingSlash: true,

};
