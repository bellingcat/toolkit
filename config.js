const config = {
  webRoot: 'toolkit',
  markdownRoot: 'gitbook',
};

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
  config.webRoot = '';
}

module.exports = config;
