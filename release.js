const standardVersion = require("standard-version");
const standardVersionConfig = { firstRelease: false };

// Options are the same as command line, except camelCase
standardVersion(standardVersionConfig, (err) => {
  if (err) {
    console.log(err);
  }
  // standard-version is done
});
