function languageTracker(lang) {
  const langObj = {
    en: "hello",
    es: "hola",
    fr: "bonjur",
  };
  if (lang in langObj) {
    console.log(langObj[lang]);
    return langObj[lang];
  }
  return langObj["en"];
}
console.log(languageTracker(""));
