import path from 'path';

module.exports = {
  turbopack: {
    root: path.join(__dirname, '..'),
  },

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/9.x/**',
      },
    ]
  },
}