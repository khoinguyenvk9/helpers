// how hre you => How are you
export function capitalizeFirstLetter(text: string) {
  if (!text || !text?.length) {
    return "";
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// how are you => How Are You
export function capFirstLetterInSentence(sentence: string) {
  if (!sentence || !sentence?.length) {
    return "";
  }
  let words = sentence.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

// How Are You => How are you
export function lowCaseFLetter(text: string) {
  if (!text || !text?.length) {
    return "";
  }
  return text.charAt(0).toLowerCase() + text.slice(1);
}
