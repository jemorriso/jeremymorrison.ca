module.exports = {
  // Cannot use webpack5 with the config that fixes the module error.
  // future: {
  //   webpack5: true,
  // },

  // I was getting `can't resolve 'fs'` when I imported 2 functions from mdx.js
  // and tried to use them both in getStaticProps. See the link, for some reason
  // it can't figure out that I'm using them only on the server side. I think
  // it's because one calls the other and it gets confused.
  // https://javascript.plainenglish.io/understand-code-splitting-in-next-js-by-solving-a-common-error-db61a9b1b1a1
  webpack: (config, { isServer }) => {
    // https://github.com/vercel/next.js/issues/7755
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
};
