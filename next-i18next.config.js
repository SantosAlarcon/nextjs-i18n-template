
const HttpBackend = require("i18next-http-backend/cjs");
const LocalStorageBackend = require("i18next-localstorage-backend").default;

const isBrowser = typeof window !== "undefined";
const isDev = process.env.NODE_ENV === "development";

/**
 * @type {import("next-i18next").UserConfig}
 */
module.exports = {
	backend: {
		backendOptions: [{ expirationTime: isDev ? 60 * 1000 : 60 * 60 * 1000 }, {}], // 1 hour
		backends: isBrowser ? [LocalStorageBackend, HttpBackend] : [],
	},
	// https://www.i18next.com/overview/configuration-options#logging
	debug: process.env.NODE_ENV === "development",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es", "ca"],
	},
	ns: ["common"],
    preload: ["en", "es", "ca"],
    load: "all",
	/** To avoid issues when deploying to some paas (vercel...) */
	localePath:
		typeof window === "undefined"
			? require("path").resolve("./locales")
			: "/locales",
	reloadOnPrerender: process.env.NODE_ENV === "development",
};
