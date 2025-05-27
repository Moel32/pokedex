/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/pokemon',
                destination: 'https://p6txghrt9c.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
            },
            {
                source: '/api/pokemon/:id',
                destination: 'https://p6txghrt9c.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id',
            },
        ];
    }
};

export default nextConfig;