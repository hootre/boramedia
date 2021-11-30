const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = {
  async redirects() {
    return [
      {
        source: '/Advertising',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Interview',
        destination: '/',
        permanent: true,
      },
      {
        source: '/MusicVideo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Promotion',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Sketch',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
