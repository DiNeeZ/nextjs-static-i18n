import { type Locale } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  params: { locale: Locale };
};

export default async function Home({ params }: Props) {
  setRequestLocale((await params).locale);
  const t = await getTranslations("HomePage");

  return (
    <div className="container">
      <h1>{t("title")}</h1>
    </div>
  );
}
