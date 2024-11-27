import { Locale } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: { locale: Locale };
}

export default async function AboutLocalePage({ params }: Props) {
  setRequestLocale((await params).locale);
  const t = await getTranslations("HomePage");

  return (
    <div className="container">
      <h1>{t("title")}</h1>
      <p>{t("about")}</p>
    </div>
  );
}
