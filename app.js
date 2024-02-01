const languages = ["es", "en", "fr", "de", "it", "pt"];
const source = "es";
const inputText = "alumbrado de continuidad";

import { translate } from "bing-translate-api";

const translations = await Promise.all(
  languages.map((lan) => {
    return translate(inputText, source, lan);
  })
);

console.log(translations);
for (let ii in languages) {
  console.log(`${languages[ii]}: "${translations[ii].translation}",`);
}
