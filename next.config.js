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
    // For env variables only on the client side (though they are currently being used in apps). 
    env: {
        FLASK_URL: 'http://127.0.0.1:5000/api',
        STRIPE_PUBLISHABLE_KEY: 'pk_live_51JOBwPJuNLcMU2Pocb0kGjjOwoh7mfLsowOmyd3Bt4zSjyPkQiqlp4SkqryAFmCyh3pmpVUY5XXpV6U6XhMPgQaB00cWGq87C0',
        STRIPE_SECRET_KEY: 'sk_test_51JOBwPJuNLcMU2Po0lqfI76r66Y2l7iSCY5y9YhiRL4aTLa0CoclZfxLbncpu6WDTnRhrmxFGnCB3iRrE2w1RgMf00dI72pw8P',
        STRIPE_WEBHOOK_SECRET_KEY: 'whsec_0JZ61tYu3AmLXG9A2XhNhVajUPd38mpO',
        JIRA_API_TOKEN: 'ATATT3xFfGF0T6h6bHVGLOMpBXF8BA7DhatmwLsmW8_LX6cFmzRAL-p749bH5JPreZvH-yXM-9U2LhUZVmt5L0rdOoZf1ErFNf5hT3mTYf9HTH95NRWKhFg2qtPJt5LJhVM_ldEhNJr1nguFqQRsFB2BOERIyGMYGsvrwXdGwU-2MihiR8ekUJ4=B8DAB07E',
        JIRA_USER_EMAIL: 'cihan@registate.com',
        JIRA_BASE_URL: 'https://registate.atlassian.net'
    }
});
