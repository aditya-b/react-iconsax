import { iconMap } from "./icons/iconMap";
import { ISaxIconName } from "./types";

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  // Initialize the matrix
  for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
  }

  // Fill in the matrix
  for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) === a.charAt(j - 1)) {
              matrix[i][j] = matrix[i - 1][j - 1];
          } else {
              matrix[i][j] = Math.min(
                  matrix[i - 1][j - 1], // substitution
                  matrix[i][j - 1],     // insertion
                  matrix[i - 1][j]      // deletion
              ) + 1;
          }
      }
  }

  return matrix[b.length][a.length];
}


const iconsList = Object.keys(iconMap);

export function getPossibleMatchIcon(target: string): ISaxIconName | null {
  let closestMatch: string | null = null;
  let minDistance: number = Infinity;

  for (const word of iconsList) {
      const distance = levenshteinDistance(target, word);
      if (distance < minDistance) {
          minDistance = distance;
          closestMatch = word;
      }
  }

  return closestMatch as ISaxIconName;
}

export const checkIfISaxIconExists = (target: string): boolean => {
  return getPossibleMatchIcon(target) !== null;
}