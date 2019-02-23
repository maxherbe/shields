'use strict'

const { redirector } = require('..')

module.exports = [
  redirector({
    category: 'coverage',
    route: {
      base: 'codecov/c',
      pattern:
        'token/:token/:vcsName(github|gh|bitbucket|bb|gl|gitlab)/:user/:repo/:branch*',
    },
    target: ({ token, vcsName, user, repo, branch }) =>
      `/codecov/c/${vcsName}/${user}/${repo}${
        branch ? `/${branch}` : ''
      }?token=${token}`,
    dateAdded: new Date('2019-02-23'),
  }),
]
