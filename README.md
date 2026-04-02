# Capital.com Automated Testing Framework

## 📌 Project Overview
This project is an automated testing framework built with Playwright for testing key sections of the Capital.com platform: Main, Trading, and About.

The framework covers multiple user scenarios and ensures application stability through automated smoke tests and CI/CD integration.

---

## 🚀 Tech Stack
- Playwright (UI Automation)
- JavaScript
- Allure Reports
- GitHub Actions (CI/CD)
- Node.js

---

## 🧪 Test Coverage
- Smoke tests for:
  - Main page
  - Trading page
  - About page
- Multi-user scenarios:
  - Authorized users
  - Unauthorized users
  - Unregistered users
- Multi-language testing using data-driven approach

---

## 🏗️ Architecture
- Page Object Model (POM) for maintainability
- Reusable utilities for:
  - Handling pop-ups
  - Cookie consent
- Environment configuration using `.env`
- Centralized `baseURL` configuration

---

## 🔐 Authentication
Authorized tests use token-based authentication:
- Login state is saved in `localStorage`
- Reused across tests for faster execution

---

## 🔁 Test Strategy
- DRY principle applied using reusable test logic (`forEach`)
- Data-driven testing for different locales and environments
- Focus on critical user flows (smoke testing)

---

## 📊 Reporting
- Allure Reports integrated
- Reports are published via GitHub Pages
- Organized by:
  - Main
  - Trading
  - About
- Execution history is preserved

👉 [View reports here](https://angealabordeniuc.github.io/capital_com_automatized_testing/)

---

## ⚙️ CI/CD
- GitHub Actions used for automated test execution
- Tests run on every push / pull request
- Reports are automatically generated and deployed

---

## ▶️ How to Run Tests

### Install dependencies
```bash
npm install
```

### Run all tests
```bash
npx playwright test
```

### Run specific project
```bash
npm run test:main:authorized
```

---

## 📈 Future Improvements
- Add API testing coverage
- Improve edge case scenarios
- Increase test coverage
- Enhance reporting with more analytics

---

## 👩‍💻 Author
Angela Bordeniuc