import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // 💡 الحل هنا: تأكد من أنك تحدد النوع بشكل صريح
  // نفترض أن routing.locales هي مصفوفة من السلاسل النصية (strings)
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});