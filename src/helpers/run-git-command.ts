import * as child from "child_process";
import * as path from "path";
import { removeEmptyLines } from "./remove-empty-lines";

const { exec, execSync } = child;

export function runGitCommand(
  gitWorkTree: any,
  command: any,
  callback?: Function
) {
  var gitCommand = gitWorkTree
    ? [
        "git",
        "--git-dir=" + path.join(gitWorkTree, ".git"),
        "--work-tree=" + gitWorkTree,
        command,
      ].join(" ")
    : ["git", command].join(" ");

  if (callback) {
    exec(gitCommand, function (err: any, stdout: any) {
      if (err) {
        return callback(err);
      }
      callback(null, removeEmptyLines(stdout));
    });
  } else {
    return removeEmptyLines("" + execSync(gitCommand));
  }
}
