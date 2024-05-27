/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    i18n: {
		locales: ["en","es","ca"],
		defaultLocale: "en",
    },
    output: "standalone",
};

export default nextConfig;
