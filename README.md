# 🎮 Mathematics Tricks Web App

[![Netlify Status](https://api.netlify.com/api/v1/badges/324e137b-0eac-4fcd-afac-5c1aa604dea0/deploy-status)](https://app.netlify.com/projects/math-tricks-app-v/deploys)
[![React](https://img.shields.io/badge/React-18.0-blue?logo=react)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Demo-Live-success?logo=netlify)](https://math-tricks-app-v.netlify.app/)

> **A modern, interactive web application for learning mental math shortcuts with an engaging game experience.**

[🚀 Live Demo](https://math-tricks-app-v.netlify.app/) | [📖 Documentation](#features) | [💡 About Me](https://www.linkedin.com/in/shri-vishnu-velan-a-k-72507b2b0)

---

## 📸 Preview

<div align="center">
  <img src="screenshots/home.png" alt="Home Page" width="800"/>
  <p><em>Clean, modern interface with three main categories</em></p>
</div>

---

## ✨ Features

### 🎯 **Core Functionality**
- **20+ Mathematics Tricks** across three categories:
  - ✖️ Multiplication (8 tricks)
  - ² Squares (6 tricks)
  - ➗ Division (7 tricks)

### 🔍 **Advanced Search System**
- Real-time filtering with exact word matching
- Case-insensitive search
- Number-specific search (e.g., search "5" finds only tricks with 5)
- Multi-word search support
- Live results count display

### 🎮 **Interactive Math Game**
- **"Race to 100"** - Strategic number game
- Three difficulty levels (Easy, Medium, Hard)
- AI opponent with optimal strategy
- Score tracking system
- Turn-based gameplay with visual feedback

### 🎨 **User Experience**
- **Hamburger Navigation Menu** with slide-in sidebar
- **Dark/Light Theme Toggle** with localStorage persistence
- **Accordion-style UI** for organized content
- **Smooth Animations** throughout the app
- **Fully Responsive** design for all devices

### 🛠️ **Technical Features**
- Built with **React 18** functional components
- **React Hooks** (useState, useEffect, useRef)
- **Component-based architecture** for reusability
- **localStorage API** for theme persistence
- **Pure CSS3** - No external UI libraries
- **Zero dependencies** for styling

---

## 🚀 Tech Stack

### **Frontend**
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

### **Tools & Deployment**
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

---

## 📁 Project Structure
```
math-tricks-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Hamburger menu navigation
│   │   ├── Navbar.css
│   │   ├── CategoryCard.jsx        # Home page cards
│   │   ├── CategoryCard.css
│   │   ├── TrickAccordion.jsx      # Expandable trick items
│   │   ├── TrickAccordion.css
│   │   ├── SearchBar.jsx           # Advanced search component
│   │   └── SearchBar.css
│   │
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page
│   │   ├── HomePage.css
│   │   ├── CategoryPage.jsx        # Tricks listing page
│   │   ├── CategoryPage.css
│   │   ├── AboutPage.jsx           # About & info page
│   │   ├── AboutPage.css
│   │   ├── GamePage.jsx            # Race to 100 game
│   │   └── GamePage.css
│   │
│   ├── data/
│   │   └── tricksData.js           # All math tricks data
│   │
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   └── index.js                    # Entry point
│
├── package.json
├── README.md
└── .gitignore
```

---

## 🎮 Game: Race to 100

A strategic number game where you compete against an AI opponent:

### **Rules:**
- Players take turns saying numbers
- Each turn, add 1 to 10 to the previous number
- First to reach exactly **100** wins!

### **Features:**
- 3 Difficulty levels (Easy, Medium, Hard)
- Hard mode uses optimal game theory strategy
- Real-time game history
- Score tracking across sessions
- Visual feedback and animations

### **Pro Tip:**
Land on multiples of 11 (1, 12, 23, 34...) to guarantee victory! 🧠

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14 or higher)
- npm or yarn

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/shriVishnuvelan/math-tricks-app.git
cd math-tricks-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

4. **Open in browser**
```
http://localhost:3000
```

### **Build for Production**
```bash
npm run build
```

---

## 💡 Key Implementations

### **1. Advanced Search Algorithm**
```javascript
// Exact number matching in titles only
// Exact word matching across all content
// Case-insensitive with word boundaries
const perfectSearch = (trick, search) => {
  const isNumber = /^\d+$/.test(search);
  if (isNumber) {
    // Extract numbers from title only
    const titleNumbers = title.match(/\b\d+\b/g) || [];
    return titleNumbers.includes(search);
  } else {
    // Word boundary matching
    const wordRegex = new RegExp(`\\b${search}\\w*\\b`, 'i');
    return wordRegex.test(allText);
  }
};
```

### **2. Game AI Strategy**
```javascript
// Hard mode: Optimal strategy using game theory
// Target multiples of 11 for guaranteed win
const optimalMoves = [1, 12, 23, 34, 45, 56, 67, 78, 89, 100];
```

### **3. Theme Persistence**
```javascript
// Save theme to localStorage
useEffect(() => {
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
}, [isDarkMode]);
```

---

## 🎨 Design Highlights

- **Desktop-First Approach:** Optimized for larger screens with responsive mobile support
- **Modern UI/UX:** Clean, intuitive interface with smooth transitions
- **Accessibility:** Semantic HTML and keyboard navigation support
- **Performance:** Optimized rendering with React best practices
- **No External Libraries:** Pure React and CSS for faster load times

---

## 📊 Project Statistics

- **Components:** 8 reusable React components
- **Pages:** 4 main pages (Home, Category, About, Game)
- **Math Tricks:** 20+ detailed tricks with examples
- **Code Quality:** Zero ESLint warnings, production-ready
- **Bundle Size:** Optimized for fast loading
- **Browser Support:** Chrome, Firefox, Safari, Edge

---

## 🎯 Use Cases

### **For Students**
- Learn mental math shortcuts
- Practice with interactive game
- Study step-by-step examples

### **For Teachers**
- Teaching resource for math classes
- Demonstrate quick calculation methods
- Engage students with interactive content

### **For Professionals**
- Quick reference for mental calculations
- Impress in meetings and interviews
- Improve numerical agility






---

## 📝 Future Enhancements

- [ ] User accounts and progress tracking
- [ ] More game modes (Countdown, Time Attack)
- [ ] Printable trick cards
- [ ] Video tutorials for each trick
- [ ] Mobile app (React Native)
- [ ] Quiz mode with scoring
- [ ] Social sharing features
- [ ] Dark mode improvements
- [ ] Accessibility enhancements
- [ ] Performance analytics

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Shri Vishnu Velan A K**

- **LinkedIn:** [shri-vishnu-velan-a-k](https://www.linkedin.com/in/shri-vishnu-velan-a-k-72507b2b0)
- **GitHub:** [@shriVishnuvelan](https://github.com/shriVishnuvelan)
- **Email:** vishnuvelan6004@gmail.com
- **Location:** Chennai, India

### **About Me**
Frontend Developer passionate about creating interactive, user-friendly web applications. Strong background in React, JavaScript, and modern web technologies. Currently building educational tools and interactive experiences.

---

## 🙏 Acknowledgments

- **Inspired by:** Mental math techniques from Vedic Mathematics
- **UI Design:** Modern web design trends and best practices
- **Game Logic:** Classic strategic number games

---

##  Support 

If you like this project, please ⭐ star this repository!

For questions or suggestions:
- Open an [Issue](https://github.com/shriVishnuvelan/math-tricks-app/issues)
- Connect on [LinkedIn](https://www.linkedin.com/in/shri-vishnu-velan-a-k-72507b2b0)
- Email: vishnuvelan6004@gmail.com

---

## 📈 Project Status

![Status](https://img.shields.io/badge/Status-Active-success)
![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg)
![Last Commit](https://img.shields.io/github/last-commit/shriVishnuvelan/math-tricks-app)

**Current Version:** 1.0.0  
**Last Updated:** January 2025  
**Status:** Production Ready ✅

---

<div align="center">

### 🌟 Star this repo if you find it helpful!

**Made with ❤️ by [Shri Vishnu Velan A K](https://github.com/shriVishnuvelan)**

[⬆ Back to Top](#-mathematics-tricks-web-app)

</div>
