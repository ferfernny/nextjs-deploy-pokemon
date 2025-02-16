// next.config.js
module.exports = {
  images: {
    domains: ['img.pokemondb.net'],
  },
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
