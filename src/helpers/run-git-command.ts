var exec = require('child_process').exec
var execSync = require('child_process').execSync
// import { exec,execSync } from 'child_process';
import path from 'path';
import { removeEmptyLines } from './remove-empty-lines';

export function runGitCommand(gitWorkTree:any, command:any, callback?:Function) {
  var gitCommand = gitWorkTree
    ? [
      'git',
      '--git-dir=' + path.join(gitWorkTree, '.git'),
      '--work-tree=' + gitWorkTree,
      command
    ].join(' ')
    : [
      'git',
      command
    ].join(' ')

  if (callback) {
    exec(gitCommand, function (err:any, stdout:any) {
      if (err) { return callback(err) }
      callback(null, removeEmptyLines(stdout))
    })
  } else {
    return removeEmptyLines('' + execSync(gitCommand))
  }
}