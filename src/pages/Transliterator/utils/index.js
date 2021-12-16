export const arabicConsonantsAndSounds = {
  ا: "",
  ب: "b",
  ت: "t",
  ث: "th",
  ج: "j",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "dh",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "ṣ",
  ض: "ḍ",
  ط: "ṭ",
  ظ: "ẓ",
  ع: "ʿ",
  غ: "gh",
  ف: "f",
  ق: "q",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  و: "w",
  ي: "y",
  ء: "",
  ة: "t",
};

export const arabicVowelArray = [" ُ", " َ", " ِ", " ْ", " ً", " ٍ", " ٌ"];

export const arabicVowelsAndSounds = {
  0: "u",
  1: "a",
  2: "i",
  3: "",
  4: "an",
  5: "in",
  6: "un",
};

// we are only handling words now and without madd
export const transliterate = (word) => {
  const arrayOfCharacters = word.split("");
  const soundArray = arrayOfCharacters.map((item, index) => {
    if (arabicConsonantsAndSounds[item]) {
      return arabicConsonantsAndSounds[item];
    } else {
      return arabicVowelsAndSounds[
        arabicVowelArray.findIndex((arrItem) => arrItem[1] === item)
      ];
    }
  });
  console.log(soundArray.join(""));
  return soundArray.join("")
};
