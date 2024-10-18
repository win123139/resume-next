/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: false,
    images: {
        domains: ['assets.aceternity.com'],
        loader: "custom",
        loaderFile: './ImageLoader.js'
    },
}

export default nextConfig;
