const config = {
  webRoot: process.env.WEB_ROOT || 'toolkit',
  markdownRoot: 'gitbook',
};

if (process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV) {
  config.webRoot = '';
}

module.exports = config;
