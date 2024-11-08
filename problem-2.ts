function removeDuplicates(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

// Sample Input:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
