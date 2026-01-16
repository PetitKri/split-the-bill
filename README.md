# Split the Bill

A simple, fast tool to split expenses between friends. Enter the bill amount, number of people, and (optionally) a tip — the app calculates **per-person total** instantly. Built with **HTML + CSS + JavaScript** and deployed on **Netlify**.

🔗 **Live demo:** https://mysplit-the-bill-app.netlify.app/

## ✨ Features
- **Real-time calculation:** updates totals as you type (no page reload).
- **Tip support:** choose a preset tip or enter a custom percentage.
- **Edge-case handling:** prevents NaN/Infinity; guards against zero or empty inputs.
- **Responsive UI:** clean layout that works great on phones and desktops.
- **Accessible inputs:** labeled fields and clear error/placeholder text.

## 🧰 Tech Stack
- **HTML5** for structure  
- **CSS3** (Flex/Grid/variables) for layout & styling  
- **JavaScript (ES6+)** for calculation logic and input events  
- **Netlify** for hosting (instant deploys)

## 🧪 How it works (logic)
- Parse bill amount, people count, and tip % from inputs.
- Compute:
  ```js
  const tipValue = bill * (tipPercent / 100);
  const total = bill + tipValue;
  const perPerson = total / people;
Display the results with proper rounding and currency formatting.

🚀 Run locally
bash
Copy code
git clone https://github.com/YOUR_USER/split-the-bill.git
cd split-the-bill
# Open index.html in your browser
# or run a static server:
# npx serve .
