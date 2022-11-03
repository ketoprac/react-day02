module.exports = {
  domain: 'http://localhost:3001',
  urlImg: 'http://localhost:3001/api/region/files',
  image: {
      remotePatterns: [
          {
              protocol: 'http',
              hostname: 'localhost',
              port: '3001',
              pathname: '/api/region/files/**',
          },
      ],
  }
}