/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/login',
            destination: '/',
            permanent: true,
          },
        ]
      },
}

module.exports = nextConfig
