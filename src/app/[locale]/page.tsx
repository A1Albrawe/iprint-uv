import HomeContent from "@/components/HomeContent";
import { setRequestLocale } from 'next-intl/server';

export default async function Home(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

  return <HomeContent />;
}
