/** @type {import('next').NextConfig} */

const withVideos = require('next-videos');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: false
});

/**
 * @type {import('next').NextConfig}
*/
const options = {
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
    experimental: {
        serverActions: true
    }
}

module.exports = withBundleAnalyzer(withVideos(options));
