# Sum Array – Codewars Kata (JavaScript)

This repository documents my solution and learning process while solving the **“Sum of Array Elements”** kata on Codewars using JavaScript. The focus of this exercise was not only to produce a correct solution, but also to understand the underlying JavaScript concepts that influence correctness, readability, and efficiency.

---

## Problem Overview

The task is to calculate the sum of all numeric elements in a given array.

Constraints provided by the challenge:
- Only numbers are passed as elements
- The array size is unknown
- The input is always an array
- An empty array should return `0`

The goal is to handle these constraints correctly while writing clean and reliable JavaScript.

---

## How I Approach the Problem

I began with a simple and intuitive solution, prioritizing **getting the code to work first** before optimizing it. This initial implementation helped validate the logic and allowed me to reason through edge cases.

After reviewing the solution, I identified logical redundancies and corrected misunderstandings related to how JavaScript handles arrays and equality comparisons. This iterative process helped refine the solution into a simpler and more technically accurate version.

The exercise reinforced the importance of understanding language fundamentals and how theoretical concepts apply in real-world code.

---

## Development Steps

1. Interpreted the problem constraints and expected behavior  
2. Implemented a basic looping solution to calculate the sum  
3. Identified a flawed empty-array check caused by reference comparison  
4. Removed redundant conditional logic by relying on array length behavior  
5. Explored a defensive approach using type checks to deepen understanding  
6. Refactored the solution for clarity, correctness, and simplicity  

---

### Key Takeaway

This kata highlighted how small mistakes in understanding JavaScript’s type system and evaluation rules can lead to incorrect assumptions. It also reinforced the value of iterative improvement and learning by refining working code rather than aiming for perfection on the first attempt.
