/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: { domains: ['localhost', 'mockapi.io'] },

    env: {
        APP_URL: process.env.REACT_APP_URL,
        APP_ENV: process.env.REACT_APP_ENV,
    },
};

module.exports = nextConfig;
