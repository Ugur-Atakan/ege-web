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
        STRIPE_PUBLISHABLE_KEY: 'pk_live_51JOBwPJuNLcMU2Pocb0kGjjOwoh7mfLsowOmyd3Bt4zSjyPkQiqlp4SkqryAFmCyh3pmpVUY5XXpV6U6XhMPgQaB00cWGq87C0',
        STRIPE_SECRET_KEY: 'sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P'
    }
});
