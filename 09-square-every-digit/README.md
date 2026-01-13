# Square Every Digit in a Number

## Problem Statement
Given a number, square each of its digits and concatenate the results to form a new number.

### Example
Input:
3212

Process:
3 → 9  
2 → 4  
1 → 1  
2 → 4  

Output:
9414

---

## Approach

1. Convert the number to a string to allow digit-level iteration.
2. Split the string into an array of individual digits.
3. Iterate through each digit and square it.
4. Store the squared values in a temporary array.
5. Join the array elements into a single value.
6. Convert the final result into a number to match the expected output type.

This approach prioritizes clarity and step-by-step transformation over excessive compactness, making the logic easy to follow and debug.

---

## Key Concepts Used

- Type conversion (`Number ↔ String`)
- Array iteration
- Implicit numeric coercion in JavaScript
- String manipulation
- Returning correct data types for test validation

---

## Notes

- The function returns a **number**, not a string, to ensure compatibility with strict equality checks in tests.
- Each step is intentionally explicit to reinforce understanding of JavaScript’s data transformations.

---

## Complexity

- **Time Complexity:** O(n), where n is the number of digits
- **Space Complexity:** O(n), due to the temporary array
