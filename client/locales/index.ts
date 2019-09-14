import ZH from './zh-TW'
import EN from './en-US'
const availableLang = {
  en: {
    alias: 'en-US',
    name: 'English',
  },
  hk: {
    alias: 'zh-TW',
    name: '繁体中文',
  }
}
// 获取语言
export function getLanguage(lang='en') {
  const lowerLang = lang.toLowerCase()
  if(lowerLang.includes('hk') || lowerLang.includes('tw')){
    return availableLang['hk'].alias
  }else{
    return availableLang['en'].alias
  }
}

// 匹配语言
export function chooseLocale(lang='en') {
  const aliasLang =  getLanguage(lang)
  if(aliasLang === 'zh-TW'){
    return ZH;
  }else{
    return EN;
  }
}