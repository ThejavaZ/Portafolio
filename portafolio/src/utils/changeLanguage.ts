import { useState } from "react";

export const changeLanguage = (lang: string) => {
  const [language, setLanguage] = useState<string>("en");
  setLanguage(lang);
  return language;
};
