/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const fs = require('fs');

exports.onPreInit = () => {
  if (process.argv[2] === 'build') {
    try {
      fs.renameSync(
        path.join(__dirname, 'public'),
        path.join(__dirname, 'public_dev')
      );
    } catch (err) {
      // on error try deleting the existing folder and then renaming
      fs.rmSync(path.join(__dirname, 'public_dev'), {
        recursive: true,
        force: true,
      });
      fs.renameSync(
        path.join(__dirname, 'public'),
        path.join(__dirname, 'public_dev')
      );
    }
  }
};

exports.onPostBuild = () => {
  fs.rmSync(path.join(__dirname, 'docs'), { recursive: true });
  fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'docs'));
  fs.renameSync(
    path.join(__dirname, 'public_dev'),
    path.join(__dirname, 'public')
  );
};
