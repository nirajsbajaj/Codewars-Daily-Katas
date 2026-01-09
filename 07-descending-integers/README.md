# Descending Order – Solution Explanation

## Problem
Given a non-negative integer, rearrange its digits to create the highest possible number.


---

## Approach

This solution builds the result **incrementally** instead of relying on built-in sorting.

The idea is simple:
1. Convert the number into individual digits
2. Repeatedly find the largest remaining digit
3. Append it to the result
4. Remove it from the working list
5. Repeat until no digits remain

This ensures each digit is used exactly once and makes the logic easy to trace.

---

## Step-by-Step Logic

- Convert the number to a string and then to an array of digits
- Use a loop to process digits until the array is empty
- In each iteration:
  - Scan the array to find the largest digit
  - Push it into the result array
  - Remove it from the original array
- Join the result array back into a number

---

## Why This Approach

- Avoids built-in sorting to keep the logic explicit
- Makes it clear how digits are selected and removed
- Easy to debug and reason about
- Handles duplicate digits naturally

---

## Notes

This solution prioritizes **clarity over brevity**.  
More concise approaches exist, but this version focuses on demonstrating the underlying logic clearly.