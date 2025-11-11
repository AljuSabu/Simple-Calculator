## 🧮 Calculator Web App

A sleek, responsive calculator built with **HTML**, **JavaScript**, and **Tailwind CSS**.
It supports basic arithmetic operations, decimal input, and percentage calculations — all with smooth button animations and a modern UI.

---

### 🚀 Demo

You can open the `index.html` file directly in your browser to use the calculator.

---

### 🖥️ Features

* ➕ Addition, ➖ Subtraction, ✖ Multiplication, ➗ Division
* 💯 Percentage (%) support
* ⚙️ Clear (`AC`) button to reset the calculator
* 🔢 Decimal input support
* 💻 Responsive, gradient-styled interface using Tailwind CSS
* ✨ Smooth button animations and active states

---

### 🛠️ Tech Stack

* **HTML5**
* **Tailwind CSS (via CDN)**
* **Vanilla JavaScript (ES6+)**

---

### 📂 Project Structure

```
📁 Calculator/
│
├── index.html      # Main HTML file – UI structure of the calculator
├── script.js       # Core calculator logic (input handling, operators, display updates)
└── README.md       # Project documentation
```

---

### ⚡ How It Works

1. The calculator display (`#display`) shows user input and results.
2. Each button click triggers a JavaScript event that updates the internal calculator state:

   * **Digits** → appended to the display
   * **Operators** → perform calculations
   * **AC** → resets all values
   * **%** → calculates percentages
3. The UI updates dynamically via the `updateDisplay()` function.

---

### 🧩 Core Logic (script.js Highlights)

* **`calculator` object** stores all state (current value, operands, operator).
* **`inputDigit()`**, **`inputDecimal()`**, and **`handleOperator()`** manage user input.
* **`calculate()`** performs arithmetic operations.
* **`resetCalculator()`** clears everything back to default.

---

### 🪄 Styling

* Tailwind’s utility classes create a modern dark theme with a smooth gradient background.
* Buttons include hover, active, and pressed effects using Tailwind transitions and shadows.

---

### 📸 Preview



---

### 📜 License

This project is open source — you can modify and use it freely for personal or educational purposes.

---
