/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');

module.exports = withVideos({
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '**',
          },
      ],
    },
    // For env variables only on the client side. 
    env: {
        API_KEY: 'http://127.0.0.1:5000/api',
    }
});
