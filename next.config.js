// next.config.js
module.exports = {
  images: {
    domains: ['source.unsplash.com'],
  },
  experimental: {
    images: {
      layoutRaw: true,
      allowFutureImage: true,
    },
  },
};
