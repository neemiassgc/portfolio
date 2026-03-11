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
      {
        protocol: 'https',
        hostname: "img.shields.io",
        port: '',
        pathname: '/badge/**'
      },
      {
        hostname: "static-10.s3.sa-east-1.amazonaws.com",
        port: '',
        pathname: "/screenshots/**",
        protocol: "https"
      }
    ]
  },
}