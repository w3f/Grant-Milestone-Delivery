'use strict'

const core = require('@actions/core')
var github = require('octonode')

const main = async () => {
  // let prData;
  // function infoCallback (err, data, headers) {
  //   prData = data;
  // };

  const author = core.getInput('author')
  console.log(`Author is ${author}`)

  const prLink = core.getInput('prLink')
  const targetRepo = core.getInput('targetRepo')
  const targetRepoOwner = core.getInput('targetRepoOwner')

  const prNumberPattern = /(?<=pull\/)\d*/g

  const prNumber = prLink.match(prNumberPattern)[0]
  console.log(`PR number is ${prNumber}`)

  var client = github.client();

  var ghpr = client.pr(`${targetRepoOwner}/${targetRepo}`, prNumber)

  console.log("Getting PR info...")
  // Wait for the response
  const res = await ghpr.infoAsync();
  // res is (data, error)
  const prData = res[0];
  console.log(`Got PR info as ${prData}`)

  if ( !prData.merged ) {
    // Making sure that the PR was merged
    core.setOutput('isValid', false)
  } else {
    const originalPrAuthor = prData.user.login
    // Making sure it's the same user
    if (originalPrAuthor !== author) {
      core.setOutput('isValid', false)
    } else {
      core.setOutput('isValid', true)
    }
  }
}

main().catch(err => core.setFailed(err.message))
