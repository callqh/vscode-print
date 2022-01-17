import { SupportLanguageProps } from "./interface";
import { colors } from "./utils/color";
import { icons } from "./utils/icons";
console.log("【 icons 】==>", icons);
// 支持的编程语言
const supportLanguage: SupportLanguageProps = {
  rust: (text?: string) => `println!("【 ${text} 】==> {:?}", ${text});`,
  javascript: (text?: string) => `console.log("【 ${text} 】==>",${text});`,
  other: (text?: string, iconIndex?: number, style?: string) =>
    `console.log("%c ${icons[iconIndex!]} ${text}:", "${style}",${text});`,
};

export const runLanguagePrint = (language: string, text: string) => {
  if (language.includes("rust")) {
    return supportLanguage["rust"](text);
  } else if (language.includes("javascript")) {
    return supportLanguage["javascript"](text);
  } else {
    const iconIndex = Math.floor(Math.random() * icons.length);
    const colorIndex = Math.floor(Math.random() * colors.length);
    const style = `font-size:22px;background-color:${colors[colorIndex]};color:#fff;`;
    return supportLanguage["other"](text, iconIndex, style);
  }
};
