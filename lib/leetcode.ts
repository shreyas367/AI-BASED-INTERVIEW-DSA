const OVERRIDES: Record<string, string> = {
  "Palindrome Check": "https://leetcode.com/problems/valid-palindrome/",
  "Heap Sort": "https://leetcode.com/problems/sort-an-array/",
  "Aggressive Cows": "https://www.spoj.com/problems/AGGRCOW/",
};

export function getLeetCodeUrl(problemName: string) {
  if (OVERRIDES[problemName]) {
    return OVERRIDES[problemName];
  }

  return (
    "https://leetcode.com/problems/" +
    problemName
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-") +
    "/"
  );
}
