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
  console.log(`PR is ${prLink}`)
  const targetRepo = core.getInput('targetRepo')
  console.log(`Repo is ${targetRepo}`)
  const targetRepoOwner = core.getInput('targetRepoOwner')
  console.log(`Owner is ${targetRepoOwner}`)

  const prNumberPattern = /(?<=pull\/)\d*/g

  const prNumber = prLink.match(prNumberPattern)
  if(!prNumber) {
    core.setOutput('isValid', false)
    throw `Error parsing application PR link (${prLink}).`
  } 
  
  prNumber = prNumber[0]
  console.log(`PR number is ${prNumber}`)
  var client = github.client();

  var ghpr = client.pr(`${targetRepoOwner}/${targetRepo}`, prNumber)

  console.log("Getting PR info...")
  // Wait for the response
  const res = await ghpr.infoAsync();
  // res is (data, error)
  const prData = res[0];
  console.log(`Got PR info as ${prData}`)

  // Making sure that the PR was merged
  if ( !prData.merged ) {
    core.setOutput('isValid', false)
    throw `Application PR is not yet approved.`
//       core.setOutput('isValid', false)
  } 
  
  const originalPrAuthor = prData.user.login
  // Making sure it's the same user
  if (originalPrAuthor !== author) {
    core.setOutput('isValid', false)
    throw `Only author of application PR can submit milestone PRs.`
  } else {
    core.setOutput('isValid', true)
  }
}

main().catch(err => core.setFailed(err.message))
