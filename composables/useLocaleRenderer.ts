export const useLocaleRenderer = (valueEn: string, valuePl: string) => {
  const { locale } = useI18n()

  return locale.value === 'en' ? valueEn : valuePl
}
