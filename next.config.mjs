/** @type {import("next").NextConfig} */
const config = {
  /*images: {
    domains: ['as2.ftcdn.net'],
    formats: ['image/jpeg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'as2.ftcdn.net',
        port: '',
        pathname: ''
      }
    ]
  },*/
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
