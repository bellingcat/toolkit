const config = {
  webRoot: 'toolkit',
  markdownRoot: 'gitbook',
};

if (process.env.NODE_ENV === 'development') {
  config.webroot = '';
}

module.exports = config;
