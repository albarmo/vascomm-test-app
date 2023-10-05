/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers()
    {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {key: "Access-Control-Allow-Credentials", value: "true"},
                    {key: "Access-Control-Allow-Origin", value: "*"},
                    {key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT"},
                    {key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"},
                ]
            }
        ]
    },
    publicRuntimeConfig: {
        apiUrl: process.env.BASE_URL
    },
    env: {
        apiUrl: process.env.BASE_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                port: '8080',
                hostname: "**",
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
