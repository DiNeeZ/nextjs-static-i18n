import { Link as I18nLink } from "@/i18n/routing";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";

function RootNavbar() {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        <li>
          <NextLink href="/">Домашня сторінка</NextLink>
        </li>
        <li>
          <NextLink href="/about">Про нас</NextLink>
        </li>
      </ul>
    </nav>
  );
}

function LocaleNavbar() {
  "use client";
  const t = useTranslations("Navbar");

  return (
    <nav>
      <ul className="flex items-center gap-2">
        <li>
          <I18nLink href="/">{t("home")}</I18nLink>
        </li>
        <li>
          <I18nLink href="/about">{t("about")}</I18nLink>
        </li>
      </ul>
    </nav>
  );
}

export default function Header({ root }: { root?: boolean }) {
  return (
    <header className="mb-6 bg-slate-200 py-4">
      <div className="container flex items-center justify-between">
        <a href="#">LOGO</a>
        {root ? <RootNavbar /> : <LocaleNavbar />}
        <LocaleSwitcher />
      </div>
    </header>
  );
}
