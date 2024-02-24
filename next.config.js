/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  webRoot: 'toolkit',
  markdownRoot: 'gitbook',
};

module.exports = nextConfig;
