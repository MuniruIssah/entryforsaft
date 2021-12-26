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
export const shadda = " ّ";
const isShadda = (character) => shadda[1] === character;
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
    console.log(item);
    if (arabicConsonantsAndSounds[item]) {
      return arabicConsonantsAndSounds[item];
    } else {
      let found = arabicVowelArray.findIndex((arrItem) => arrItem[1] === item);
      if (found > -1) {
        return arabicVowelsAndSounds[found];
      } else {
        return isShadda(item) ? "shad" : null;
      }
    }
  });
  
  for (let i = 1; i < soundArray.length; i++) {
    if (soundArray[i] === "shad") {
      let nearestC = nearestConsonant(arrayOfCharacters, i);
      // console.log(nearestC);
      soundArray.splice(i,1);
      console.log(soundArray);
      soundArray.splice(nearestC.index + 1, 0, nearestC.character);
      console.log(soundArray);
    }
  }

  return soundArray.join("");
};

const nearestConsonant = (array, currentIndex) => {
  for (let i = currentIndex - 1; i >= 0; i--) {
    if (arabicConsonantsAndSounds[array[i]]) {
      return { character: arabicConsonantsAndSounds[array[i]], index: i };
    }
  }
};
