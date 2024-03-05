const config = {
  webRoot: process.env.WEB_ROOT || 'toolkit',
  markdownRoot: 'gitbook',
};

if (process.env.NODE_ENV === 'development') {
  config.webRoot = '';
}

module.exports = config;
