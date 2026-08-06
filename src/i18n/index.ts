// Точка входа для всего языкового: компоненты импортируют `../i18n`.
// Разнесено по файлам, чтобы провайдер жил отдельно от словарей и хука —
// иначе HMR перезагружает половину приложения на каждую правку строки.
export { LanguageProvider } from './LanguageProvider'
export { useT } from './context'
export type { Ctx } from './context'
export type { Dict } from './dictionaries'
