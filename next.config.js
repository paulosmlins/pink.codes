const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
