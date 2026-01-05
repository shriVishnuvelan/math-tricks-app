// ============================================
// DATA - All Mathematics Tricks
// ============================================

const tricksData = {
  multiplication: [
    {
      id: 1,
      title: "Multiply by 5",
      explanation: "To multiply any number by 5, divide it by 2 and multiply by 10.",
      steps: [
        "Take the number you want to multiply by 5",
        "Divide that number by 2",
        "Multiply the result by 10"
      ],
      example: "38 × 5 = (38 ÷ 2) × 10 = 19 × 10 = 190"
    },
    {
      id: 2,
      title: "Multiply by 9",
      explanation: "Multiply by 10 and subtract the original number.",
      steps: [
        "Multiply the number by 10",
        "Subtract the original number from the result"
      ],
      example: "47 × 9 = (47 × 10) - 47 = 470 - 47 = 423"
    },
    {
      id: 3,
      title: "Multiply by 11",
      explanation: "For two-digit numbers, add the digits and place the sum in the middle.",
      steps: [
        "Take a two-digit number (AB)",
        "Add the two digits (A + B)",
        "Place the sum between the original digits"
      ],
      example: "23 × 11 = 2_(2+3)_3 = 253 | 45 × 11 = 4_(4+5)_5 = 495"
    },
    {
      id: 4,
      title: "Multiply by 25",
      explanation: "Divide the number by 4 and multiply by 100.",
      steps: [
        "Divide the number by 4",
        "Multiply the result by 100"
      ],
      example: "16 × 25 = (16 ÷ 4) × 100 = 4 × 100 = 400"
    },
    {
      id: 5,
      title: "Multiply by 99",
      explanation: "Multiply by 100 and subtract the original number.",
      steps: [
        "Multiply the number by 100",
        "Subtract the original number"
      ],
      example: "36 × 99 = (36 × 100) - 36 = 3600 - 36 = 3564"
    },
    {
      id: 6,
      title: "Numbers Close to 100",
      explanation: "For numbers near 100, use the difference method.",
      steps: [
        "Find how far each number is from 100",
        "Subtract the sum of differences from 100",
        "Multiply the differences",
        "Combine: (Step 2 result)(Step 3 result)"
      ],
      example: "97 × 98 = (100-3)(100-2) = (97-2)|(3×2) = 95|06 = 9506"
    },
    {
      id: 7,
      title: "Doubling & Halving Method",
      explanation: "When one number is even, halve it and double the other repeatedly until simple.",
      steps: [
        "Halve the even number",
        "Double the other number",
        "Repeat until easy to multiply"
      ],
      example: "16 × 25 = 8 × 50 = 4 × 100 = 400"
    },
    {
      id: 8,
      title: "Cross Multiplication Shortcut",
      explanation: "For multiplying two 2-digit numbers ending with 1.",
      steps: [
        "Multiply the first digits and add also add first digits",
        "Multiply the last digits",
        "Combine the results"
      ],
      example: "21 × 41 = (2×4)(2+4)(1×1) = 8|6|1 = 861"
    }
  ],
  squares: [
    {
      id: 1,
      title: "Square Numbers Ending with 5",
      explanation: "For numbers ending in 5, multiply the first digit(s) by the next number, then add 25.",
      steps: [
        "Take the digit(s) before 5",
        "Multiply it by (itself + 1)",
        "Append 25 to the result"
      ],
      example: "25² = 2 × 3 = 6, append 25 = 625 | 75² = 7 × 8 = 56, append 25 = 5625"
    },
    {
      id: 2,
      title: "Square Numbers Close to 10",
      explanation: "Use the formula (10 + a)² = 100 + 20a + a²",
      steps: [
        "Find the difference from 10 (call it 'a')",
        "Calculate 100 + 20a + a²"
      ],
      example: "12² = (10+2)² = 100 + 40 + 4 = 144 | 9² = (10-1)² = 100 - 20 + 1 = 81"
    },
    {
      id: 3,
      title: "Square Numbers Close to 100",
      explanation: "Use the formula (100 + a)² = 10000 + 200a + a²",
      steps: [
        "Find the difference from 100 (call it 'a')",
        "Calculate 10000 + 200a + a²"
      ],
      example: "103² = 10000 + 600 + 9 = 10609 | 97² = 10000 - 600 + 9 = 9409"
    },
    {
      id: 4,
      title: "Squaring Two-Digit Numbers",
      explanation: "Use the algebraic identity (a + b)² = a² + 2ab + b²",
      steps: [
        "Break the number into tens (a) and ones (b)",
        "Calculate a², 2ab, and b²",
        "Add them together"
      ],
      example: "23² = (20 + 3)² = 400 + 120 + 9 = 529"
    },
    {
      id: 5,
      title: "Using (a + b)² Formula",
      explanation: "Express number as sum of convenient parts and use the expansion.",
      steps: [
        "Choose convenient a and b where a + b = number",
        "Apply: (a + b)² = a² + 2ab + b²"
      ],
      example: "34² = (30 + 4)² = 900 + 240 + 16 = 1156"
    },
    {
      id: 6,
      title: "Difference of Squares Method",
      explanation: "For numbers near a perfect square, use (a² - b²) = (a+b)(a-b)",
      steps: [
        "Find nearest perfect square",
        "Use the formula to adjust"
      ],
      example: "29² = (30-1)² = 900 - 60 + 1 = 841 or use 30² - 2(30) + 1"
    }
  ],
  division: [
    {
      id: 1,
      title: "Division by 5",
      explanation: "Multiply by 2 and divide by 10.",
      steps: [
        "Multiply the number by 2",
        "Divide the result by 10"
      ],
      example: "350 ÷ 5 = (350 × 2) ÷ 10 = 700 ÷ 10 = 70"
    },
    {
      id: 2,
      title: "Division by 9",
      explanation: "Sum the digits repeatedly until you get a single digit. This is the remainder.",
      steps: [
        "Divide normally",
        "To check: add all digits of the dividend",
        "The remainder when divided by 9 equals the digit sum mod 9"
      ],
      example: "456 ÷ 9 = 50 remainder 6 | Check: 4+5+6 = 15, 1+5 = 6 ✓"
    },
    {
      id: 3,
      title: "Division by 11",
      explanation: "Alternating sum of digits gives remainder when divided by 11.",
      steps: [
        "Alternate adding and subtracting digits",
        "The result (mod 11) is the remainder"
      ],
      example: "253 ÷ 11: 2 - 5 + 3 = 0, so 253 is divisible by 11 = 23"
    },
    {
      id: 4,
      title: "Division Using Fractions",
      explanation: "Convert division to fraction multiplication.",
      steps: [
        "Write division as a fraction",
        "Simplify by canceling common factors",
        "Multiply if needed"
      ],
      example: "48 ÷ 6 = 48/6 = 8 | 75 ÷ 25 = 75/25 = 3"
    },
    {
      id: 5,
      title: "Breaking Large Numbers",
      explanation: "Break dividend into smaller parts that are easier to divide.",
      steps: [
        "Split the large number into parts",
        "Divide each part separately",
        "Add the results"
      ],
      example: "156 ÷ 4 = (120 + 36) ÷ 4 = 30 + 9 = 39"
    },
    {
      id: 6,
      title: "Division by 25",
      explanation: "Multiply by 4 and divide by 100.",
      steps: [
        "Multiply the number by 4",
        "Divide by 100"
      ],
      example: "800 ÷ 25 = (800 × 4) ÷ 100 = 3200 ÷ 100 = 32"
    },
    {
      id: 7,
      title: "Successive Division",
      explanation: "Break the divisor into factors and divide successively.",
      steps: [
        "Factor the divisor",
        "Divide by each factor one at a time"
      ],
      example: "144 ÷ 12 = 144 ÷ 4 ÷ 3 = 36 ÷ 3 = 12"
    }
  ]
};

export default tricksData;