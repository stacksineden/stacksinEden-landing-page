export const shortenString = (input: string, maxLength: number): string => {
    if (input.length <= maxLength) {
      return input; // No need to shorten the string
    }
  
    const shortenedString = input.substring(0, maxLength) + "...";
    return shortenedString;
  }
  