module.exports = {
  reactStrictMode: true,

  // No tours scheduled at the moment, so /tours is redirected to the homepage.
  // The page itself is left intact - remove this redirect to bring it back.
  async redirects() {
    return [
      {
        source: "/tours",
        destination: "/",
        permanent: false,
      },
    ];
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
