var os = require('os');

function firstDir(filename) {
  return filename.split('/')[0];
}

function unwin(fileName) {
  if (os.platform() != 'win32') {
    return fileName;
  }

  fileName = fileName.replace(/\\/g, '/');

  var firstColon = firstDir(fileName).indexOf(':');
  if (firstColon !== -1) {
    fileName = fileName.slice(firstColon + 1);
  }

  return fileName;
};

module.exports = unwin;
