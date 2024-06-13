/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: isDev ? '' : '/blog',
};

export default nextConfig;
