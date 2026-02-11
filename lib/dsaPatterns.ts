export const dsaProblems: Record<
  string,
  { name: string; difficulty: "Easy" | "Medium" | "Hard" }[]
> = {
  array: [
    { name: "Two Sum", difficulty: "Easy" },
    { name: "Best Time to Buy and Sell Stock", difficulty: "Easy" },
    { name: "Maximum Subarray (Kadane)", difficulty: "Medium" },
    { name: "Subarray Sum Equals K", difficulty: "Medium" },
    { name: "Merge Intervals", difficulty: "Medium" },
    { name: "Majority Element", difficulty: "Easy" },
    { name: "Product of Array Except Self", difficulty: "Medium" },
    { name: "Set Matrix Zeroes", difficulty: "Medium" },
    { name: "Next Permutation", difficulty: "Medium" },
    { name: "Trapping Rain Water", difficulty: "Hard" },
    // Added
    { name: "3Sum", difficulty: "Medium" },
    { name: "Container With Most Water", difficulty: "Medium" },
  ],

  string: [
    { name: "Valid Anagram", difficulty: "Easy" },
    { name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { name: "Longest Palindromic Substring", difficulty: "Medium" },
    { name: "String to Integer (atoi)", difficulty: "Medium" },
    { name: "Group Anagrams", difficulty: "Medium" },
    { name: "Minimum Window Substring", difficulty: "Hard" },
    { name: "Valid Parentheses", difficulty: "Easy" },
    { name: "Implement strstr()", difficulty: "Easy" },
    { name: "Palindrome Check", difficulty: "Easy" },
    { name: "Z Algorithm / KMP", difficulty: "Hard" },
    // Added
    { name: "Longest Common Prefix", difficulty: "Easy" },
    { name: "Encode and Decode Strings", difficulty: "Medium" },
  ],

  "linked-list": [
    { name: "Reverse Linked List", difficulty: "Easy" },
    { name: "Detect Cycle in Linked List", difficulty: "Easy" },
    { name: "Find Middle of Linked List", difficulty: "Easy" },
    { name: "Merge Two Sorted Lists", difficulty: "Easy" },
    { name: "Remove Nth Node From End", difficulty: "Medium" },
    { name: "Intersection of Two Linked Lists", difficulty: "Easy" },
    { name: "Palindrome Linked List", difficulty: "Medium" },
    { name: "Reverse Nodes in K-Group", difficulty: "Hard" },
    { name: "Copy List with Random Pointer", difficulty: "Hard" },
    { name: "Flatten Multilevel Linked List", difficulty: "Medium" },
    // Added
    { name: "Add Two Numbers", difficulty: "Medium" },
    { name: "Reorder List", difficulty: "Medium" },
  ],

  stack: [
    { name: "Valid Parentheses", difficulty: "Easy" },
    { name: "Next Greater Element", difficulty: "Medium" },
    { name: "Daily Temperatures", difficulty: "Medium" },
    { name: "Min Stack", difficulty: "Easy" },
    { name: "Evaluate Reverse Polish Notation", difficulty: "Medium" },
    { name: "Largest Rectangle in Histogram", difficulty: "Hard" },
    { name: "Sliding Window Maximum", difficulty: "Hard" },
    { name: "Asteroid Collision", difficulty: "Medium" },
    { name: "Remove K Digits", difficulty: "Medium" },
    { name: "Stock Span Problem", difficulty: "Medium" },
    // Added
    { name: "Decode String", difficulty: "Medium" },
    { name: "Simplify Path", difficulty: "Medium" },
  ],

  queue: [
    { name: "Implement Queue using Stack", difficulty: "Easy" },
    { name: "Sliding Window Maximum", difficulty: "Hard" },
    { name: "First Negative Number in Window", difficulty: "Medium" },
    { name: "LRU Cache", difficulty: "Hard" },
    { name: "Circular Queue", difficulty: "Easy" },
    { name: "Rotting Oranges", difficulty: "Medium" },
    { name: "Generate Binary Numbers", difficulty: "Easy" },
    { name: "Interleave Queue", difficulty: "Medium" },
    { name: "Task Scheduler", difficulty: "Medium" },
    { name: "Design Hit Counter", difficulty: "Medium" },
    // Added
    { name: "Gas Station", difficulty: "Medium" },
    { name: "Number of Recent Calls", difficulty: "Easy" },
  ],

  heap: [
    { name: "Kth Largest Element", difficulty: "Medium" },
    { name: "Top K Frequent Elements", difficulty: "Medium" },
    { name: "Merge K Sorted Lists", difficulty: "Hard" },
    { name: "Find Median from Data Stream", difficulty: "Hard" },
    { name: "K Closest Points to Origin", difficulty: "Medium" },
    { name: "Reorganize String", difficulty: "Medium" },
    { name: "Task Scheduler", difficulty: "Medium" },
    { name: "Minimum Cost of Ropes", difficulty: "Easy" },
    { name: "Heap Sort", difficulty: "Medium" },
    { name: "Smallest Range Covering K Lists", difficulty: "Hard" },
    // Added
    { name: "Last Stone Weight", difficulty: "Easy" },
    { name: "Design Twitter", difficulty: "Medium" },
  ],

  "binary-search": [
    { name: "Binary Search", difficulty: "Easy" },
    { name: "First and Last Position", difficulty: "Medium" },
    { name: "Search in Rotated Sorted Array", difficulty: "Medium" },
    { name: "Find Peak Element", difficulty: "Medium" },
    { name: "Square Root of X", difficulty: "Easy" },
    { name: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { name: "Minimum Speed to Eat Bananas", difficulty: "Medium" },
    { name: "Allocate Books", difficulty: "Medium" },
    { name: "Aggressive Cows", difficulty: "Hard" },
    { name: "Capacity to Ship Packages", difficulty: "Medium" },
    // Added
    { name: "Search a 2D Matrix", difficulty: "Medium" },
    { name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium" },
  ],

  "binary-tree": [
    { name: "Inorder Traversal", difficulty: "Easy" },
    { name: "Maximum Depth of Binary Tree", difficulty: "Easy" },
    { name: "Diameter of Binary Tree", difficulty: "Medium" },
    { name: "Balanced Binary Tree", difficulty: "Easy" },
    { name: "Lowest Common Ancestor", difficulty: "Medium" },
    { name: "Level Order Traversal", difficulty: "Easy" },
    { name: "Zigzag Traversal", difficulty: "Medium" },
    { name: "Boundary Traversal", difficulty: "Medium" },
    { name: "Serialize & Deserialize Tree", difficulty: "Hard" },
    { name: "Binary Tree Maximum Path Sum", difficulty: "Hard" },
    // Added
    { name: "Symmetric Tree", difficulty: "Easy" },
    { name: "Path Sum", difficulty: "Easy" },
  ],

  bst: [
    { name: "Search in BST", difficulty: "Easy" },
    { name: "Insert into BST", difficulty: "Easy" },
    { name: "Delete Node in BST", difficulty: "Medium" },
    { name: "Validate BST", difficulty: "Medium" },
    { name: "LCA in BST", difficulty: "Easy" },
    { name: "Kth Smallest Element", difficulty: "Medium" },
    { name: "Convert Sorted Array to BST", difficulty: "Easy" },
    { name: "Recover BST", difficulty: "Hard" },
    { name: "BST Iterator", difficulty: "Medium" },
    { name: "Two Sum in BST", difficulty: "Easy" },
    // Added
    { name: "Convert Sorted List to Binary Search Tree", difficulty: "Medium" },
    { name: "Trim a Binary Search Tree", difficulty: "Medium" },
  ],

  graph: [
    { name: "Number of Islands", difficulty: "Medium" },
    { name: "DFS Traversal", difficulty: "Easy" },
    { name: "BFS Traversal", difficulty: "Easy" },
    { name: "Detect Cycle in Graph", difficulty: "Medium" },
    { name: "Topological Sort", difficulty: "Medium" },
    { name: "Course Schedule", difficulty: "Medium" },
    { name: "Dijkstra Algorithm", difficulty: "Medium" },
    { name: "Bellman Ford", difficulty: "Medium" },
    { name: "Minimum Spanning Tree", difficulty: "Hard" },
    { name: "Word Ladder", difficulty: "Hard" },
    // Added
    { name: "Clone Graph", difficulty: "Medium" },
    { name: "Pacific Atlantic Water Flow", difficulty: "Medium" },
  ],

  dp: [
    { name: "Climbing Stairs", difficulty: "Easy" },
    { name: "Fibonacci DP", difficulty: "Easy" },
    { name: "0/1 Knapsack", difficulty: "Medium" },
    { name: "Subset Sum", difficulty: "Medium" },
    { name: "Partition Equal Subset Sum", difficulty: "Medium" },
    { name: "Longest Common Subsequence", difficulty: "Medium" },
    { name: "Longest Increasing Subsequence", difficulty: "Medium" },
    { name: "Unique Paths", difficulty: "Medium" },
    { name: "Minimum Path Sum", difficulty: "Medium" },
    { name: "DP on Trees", difficulty: "Hard" },
    // Added
    { name: "House Robber", difficulty: "Medium" },
    { name: "Coin Change", difficulty: "Medium" },
  ],

  hashing: [
    { name: "Two Sum", difficulty: "Easy" },
    { name: "Contains Duplicate", difficulty: "Easy" },
    { name: "Valid Anagram", difficulty: "Easy" },
    { name: "Group Anagrams", difficulty: "Medium" },
    { name: "Top K Frequent Elements", difficulty: "Medium" },
    { name: "Longest Consecutive Sequence", difficulty: "Medium" },
    { name: "Subarray Sum Equals K", difficulty: "Medium" },
    { name: "4Sum II", difficulty: "Medium" },
    { name: "First Missing Positive", difficulty: "Hard" },
    { name: "Minimum Window Substring", difficulty: "Hard" },
    // Added
    { name: "Isomorphic Strings", difficulty: "Easy" },
    { name: "Word Pattern", difficulty: "Easy" },
  ],

  "sliding-window": [
    { name: "Maximum Sum Subarray of Size K", difficulty: "Easy" },
    { name: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { name: "Longest Substring with K Distinct Characters", difficulty: "Medium" },
    { name: "Fruit Into Baskets", difficulty: "Medium" },
    { name: "Minimum Size Subarray Sum", difficulty: "Medium" },
    { name: "Permutation in String", difficulty: "Medium" },
    { name: "Find All Anagrams in String", difficulty: "Medium" },
    { name: "Sliding Window Maximum", difficulty: "Hard" },
    { name: "Minimum Window Substring", difficulty: "Hard" },
    { name: "Substring with Concatenation of All Words", difficulty: "Hard" },
    // Added
    { name: "Longest Repeating Character Replacement", difficulty: "Medium" },
    { name: "Max Consecutive Ones III", difficulty: "Medium" },
  ],
};