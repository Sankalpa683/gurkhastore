module.exports = {
    siteUrl: 'https://gurkhastore.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: '/private' },
        ],
    },
}
