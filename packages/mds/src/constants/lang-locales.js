import {
  LANG_DA_DK,
  LANG_DE_DE,
  LANG_EN_GB,
  LANG_EN_US,
  LANG_ES_LA,
  LANG_FI_FI,
  LANG_FR_FR,
  LANG_IT_IT,
  LANG_JA_JP,
  LANG_KO_KR,
  LANG_NL_NL,
  LANG_NO_NO,
  LANG_PT_BR,
  LANG_RU_RU,
  LANG_SV_SE,
  LANG_TR_TR,
  LANG_ZH_TW,
} from './locales';

/**
 * Mapping of the locales to their display labels
 *
 * @type {Object<string, string>}
 */
export const LOCALE_LABELS = Object.freeze({
  [LANG_EN_US]: 'English (US)',
  [LANG_EN_GB]: 'English (UK)',
  [LANG_DE_DE]: 'Deutsch',
  [LANG_FR_FR]: 'Français',
  [LANG_NL_NL]: 'Nederlands',
  [LANG_DA_DK]: 'Dansk',
  [LANG_ES_LA]: 'Español',
  [LANG_FI_FI]: 'Suomi',
  [LANG_IT_IT]: 'Italiano',
  [LANG_JA_JP]: '日本語',
  [LANG_KO_KR]: '한국어',
  [LANG_NO_NO]: 'Norsk',
  [LANG_PT_BR]: 'Português',
  [LANG_RU_RU]: 'Русский',
  [LANG_SV_SE]: 'Svenska',
  [LANG_TR_TR]: 'Türkçe',
  [LANG_ZH_TW]: '中文(繁體)',
});

/**
 * SurveyMonkey language locales
 *
 * @type {Array<string>}
 */
export const SM_LANG_LOCALES = Object.freeze([
  LANG_EN_US,
  LANG_EN_GB,
  LANG_DE_DE,
  LANG_FR_FR,
  LANG_NL_NL,
  LANG_DA_DK,
  LANG_ES_LA,
  LANG_FI_FI,
  LANG_IT_IT,
  LANG_JA_JP,
  LANG_KO_KR,
  LANG_NO_NO,
  LANG_PT_BR,
  LANG_RU_RU,
  LANG_SV_SE,
  LANG_TR_TR,
  LANG_ZH_TW,
]);

/**
 * Help Center language locales
 *
 * @type{Array<string>}
 */
export const SMHELP_LANG_LOCALES = Object.freeze([
  LANG_EN_US,
  LANG_ES_LA,
  LANG_DE_DE,
  LANG_FR_FR,
  LANG_NL_NL,
  LANG_PT_BR,
  LANG_JA_JP,
  LANG_IT_IT,
  LANG_TR_TR,
  LANG_RU_RU,
  LANG_KO_KR,
  LANG_ZH_TW,
]);

/**
 * Momentive language locales
 *
 * @type {Array<string>}
 */
export const MOMENTIVE_LANG_LOCALES = Object.freeze([
  LANG_EN_US,
  LANG_EN_GB,
  LANG_DE_DE,
  LANG_FR_FR,
  LANG_NL_NL,
]);

/**
 * GetFeedback language locales
 *
 * @type {Array<string>}
 */
export const GETFEEDBACK_LANG_LOCALES = Object.freeze([
  LANG_EN_US,
  LANG_EN_GB,
  LANG_DE_DE,
  LANG_FR_FR,
  LANG_NL_NL,
]);
