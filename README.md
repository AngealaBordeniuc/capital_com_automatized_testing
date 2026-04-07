# Capital.com Automation Testing Framework (Playwright/JavaScript)
Automated UI testing framework built with Playwright, featuring CI/CD integration and Allure reporting.

## 📌 Project Overview
This project represents an independently designed and implemented Playwright-based automation framework for testing key areas of the Capital.com platform: **Main, Trading, and About**.

The goal of the project is to simulate a **real-world QA automation environment**, focusing on scalability, maintainability, and integration with CI/CD pipelines.

---

## 🔥 Key Highlights
- Independently designed and implemented a scalable automation framework
- Multi-user testing: authorized, unauthorized, unregistered
- CI/CD integration using GitHub Actions
- Allure reporting with history published via GitHub Pages
- Data-driven testing across multiple languages/locales
- Token-based authentication using `localStorage`

---

## 📊 Test Metrics
- Covers 3 core application areas (Main, Trading, About)
- Multiple user states supported
- Data-driven execution for multi-language validation
- Automated execution on every push via CI/CD

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
- Multi-language testing using a data-driven approach

---

## 🏗️ Architecture
- Page Object Model (POM) for scalability and maintainability
- Reusable utility methods for:
  - Handling pop-ups
  - Cookie consent flows
- Environment configuration via `.env`
- Centralized `baseURL` configuration for flexible execution

---

## 🔐 Authentication
Authorized scenarios are handled via token-based authentication:
- Login state is stored in `localStorage`
- Reused across tests to avoid repeated login steps
- Improves test speed and stability

---

## 🔁 Test Strategy
- DRY principle applied using reusable logic (`forEach`)
- Data-driven testing for multiple locales and environments
- Focus on critical user flows (smoke testing)
- Separation of concerns using Page Object Model

---

## 📊 Reporting
- Allure Reports integrated
- Reports are published via GitHub Pages
- Organized by:
  - Main
  - Trading
  - About
- Historical test results are preserved across runs

👉 **Live Reports:**  
https://angealabordeniuc.github.io/capital_com_automatized_testing/

---

## ⚙️ CI/CD
- CI/CD pipeline implemented using GitHub Actions
- Tests executed on:
  - Push
  - Pull Request
- Automatic report generation and deployment to GitHub Pages

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