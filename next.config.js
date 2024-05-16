/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  resolve: {
    fallback: {
      fs: false // This line is added to handle 'fs' module for browser
    }
  },
  webpack5: true,
  webpack: (config, { webpack }) => {
    config.resolve.fallback = { fs: false };

    config.plugins.push(
      // Remove node: from import specifiers, because Next.js does not yet support node: scheme
      // https://github.com/vercel/next.js/issues/28774
      new webpack.NormalModuleReplacementPlugin(
        /^node:/,
        (resource) => {
          resource.request = resource.request.replace(/^node:/, '');
        },
      ),
    );

    return config;
  },
}

module.exports = nextConfig
