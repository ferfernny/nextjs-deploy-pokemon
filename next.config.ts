// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons-search',
        permanent: true,
      },
    ];
  },
};
