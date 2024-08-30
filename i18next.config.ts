const i18NextConfig = {
    debug: process.env.NODE_ENV === "development",
    i18n: {
        locales: ["en", "es", "ca"],
        defaultLocale: "en"
    },
    fallbackNS: "common",
    defaultNS: "common",
    ns: ["common"],
    load: "all",
    preload: ["en", "es", "ca"]
}

export const getOptions = (lang: string, ns: string | string[]) => {
    return {
        supportedLangs: i18NextConfig.i18n.locales,
        lang,
        ns,
        fallbackNS: i18NextConfig.fallbackNS,
        defaultNS: i18NextConfig.defaultNS
    }
}

export default i18NextConfig
