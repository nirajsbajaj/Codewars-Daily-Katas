# Isogram Checker – Case-Insensitive Interpretation

## 🧠 Problem Overview

An **isogram** is a word or phrase in which no letter appears more than once.  
The challenge in this problem is to determine whether a given string is an isogram **while ignoring letter case**.

This means that uppercase and lowercase versions of the same letter should be treated as identical during comparison.

---

## 🔍 Key Constraint: Ignoring Letter Case

From a language perspective, characters like `'o'` and `'O'` are different because they have different character codes. However, the **problem domain explicitly overrides this distinction** by stating that letter case should be ignored.

To correctly apply this constraint, the input must first be **normalized** to a consistent case (commonly lowercase). Only after this normalization should the logic for detecting duplicate letters be applied.

This step ensures that:
- `'A'` and `'a'` are treated as the same character
- The solution adheres strictly to the rules defined by the problem

---

## 🧩 Solution Approach (Conceptual)

Rather than jumping directly into logic, the problem is broken into clear stages:

1. **Normalize the input**
   - Convert the entire string to a single case (lowercase or uppercase)
2. **Evaluate character uniqueness**
   - Check whether any character appears more than once in the normalized string
3. **Return the result**
   - If duplicates exist → not an isogram
   - If all characters are unique → isogram

This separation of concerns improves clarity, correctness, and maintainability.

---

## ✅ Why This Approach Works

- Respects both **language-level behavior** and **problem constraints**
- Prevents false positives caused by case differences
- Mirrors real-world practices such as case-insensitive comparisons in usernames, searches, and identifiers

---

## 📌 Notes

- An empty string is typically considered an isogram
- The problem definition may vary on whether to include non-alphabetic characters; this solution focuses strictly on letter case handling as specified

---

## 📘 Takeaway

The key insight in this problem is understanding that *“ignore letter case”* is not automatic—it must be **explicitly implemented**. Normalizing the input before applying logic ensures the solution operates within the correct comparison domain.