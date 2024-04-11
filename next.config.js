module.exports = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    async headers() {
        return [
            {
                // Sets security headers for all routes
                source: '/(.*)',
                headers: [
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(); battery=(); geolocation=(); microphone=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                ],
            },
        ];
    },
    optimizeFonts: false,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.pdf/,
            type: 'asset/resource',
            generator: {
                filename: 'static/[hash][ext]',
            },
        });
        return config;
    },
    staticPageGenerationTimeout: 1000,
    output: 'standalone',
};
