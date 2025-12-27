# Spin Words – Codewars Kata (JavaScript)

This repository contains my solution to the **Spin Words** kata from Codewars.  
The focus here is not just the final function, but the **thinking process** used to arrive at it.

Instead of jumping straight into a one-file solution, I approached this problem by breaking it down in plain English first and then translating that breakdown into code step by step.

---

## Problem overview

Given a string of one or more words, the task is to return the same string where:

- Words with **five or more letters** are reversed
- Shorter words remain unchanged
- The original word order is preserved

The input consists only of letters and spaces.

---

## How I approached the problem

Before writing the final solution, I wrote a **plain-English problem breakdown** to clarify:

- Whether the operation should happen at the word level or character level
- When character reversal is actually required
- How to preserve the original structure of the sentence

That breakdown was then implemented gradually through smaller experiments in code.

---

## Development steps

To avoid solving everything at once, I split the work into focused steps:

- Understanding how character reversal works in isolation
- Identifying words based on their character length
- Combining both behaviors into a single readable solution

Some intermediate files are intentionally kept to document this reasoning process.

---

## Repository structure

- Intermediate files explore individual concepts used in the solution
- The final solution file contains the complete implementation
- File separation reflects problem decomposition, not leftover code

---

## Language and Platform

- Language: JavaScript
- Platform: Codewars

---

This kata is part of my daily practice focused on improving fundamentals, clarity, and problem-solving habits rather than writing the shortest possible solution.
