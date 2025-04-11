"use client";

import styles from "@/styles/page.module.css";
import locales from "@/locales.json";
import i18next from "i18next";
import { useRouter } from "next/navigation";

const LanguageChooser = ({lang}: {lang: string}) => {
	const i18n = i18next.createInstance({
		lng: lang,
		ns: ["common"],
		defaultNS: "common",
	})
	const router = useRouter();

	const handleChangeLanguage = (language: string) => {
		router.push(`/${language}`);
	};

	return (
        <form className={styles.form}>
            <label>
                {i18n.t("language")}:
                <select
                    name="language"
                    defaultValue={lang}
                    onChange={(e) => handleChangeLanguage(e.target.value)}
                >
                    {locales.map((locale) => (
                        <option key={locale.code}>{locale.name}</option>
                    ))}
                </select>
            </label>
        </form>
    );
};

export default LanguageChooser;
