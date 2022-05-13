# 2022 Fall Front End Developer Intern Challenge

Presenting _Fun with OpenAI_, a simple application that uses the GPT-3 AI Model created by [OpenAI](https://openai.com/api/) to uses plain text prompts to produce outputs that are hard to distinguish from human writing.

You can find more information about the specifications of the challenge [here](https://docs.google.com/document/d/1O7mCynsz_cBXkEaCFGSZAuvAOY84QVq35l20xJwjOYg/edit).

You can find the live deployment [here](https://shopify22-pablo-frontend-chal.netlify.app/)

## 🔍 Preview

### 💻 Desktop

[Desktop Preview](src/images/DesktopView.gif)

### 📱 Mobile

[Mobile Preview](src/images/MobileView.gif)

## 📚 Table of Contents

- [🔍 Preview](#-preview)
  - [📱 Mobile](#-mobile)
  - [💻 Desktop](#-desktop)
- [📚 Table of Contents](#-table-of-contents)
- [🚀 Features](#-features)
- [🔧 Getting Started](#-getting-started)
  - [Run Development Environment](#run-development-environment)
  - [Build for Production](#build-for-production)
- [👩‍💻 Technologies and Libraries Used](#-technologies-and-libraries-used)
- [♿ Accessibility](#-accessibility)
- [📝 Notes](#-notes)

## 🚀 Features

- User is able to select prompt statements which can be submitted
- User is able to type in prompt which can be submitted
- User prompts and API responses will appear under Responses
- Responses can be viewed newest first
- User can refresh or leave the page and responses will not clear
- User can use "Clear History" button to clear responses

## 🔧 Getting Started

You can clone this repository by using the command line:

```bash
git clone git@github.com:tackpablo/shopify-fe-intern-challenge-22-tackpablo.git app
cd app
yarn # npm i
```

- Remember to install dependencies after cloning it locally.

### Run Development Environment

```bash
yarn dev # npm run start
```

### Build for Production

```bash
yarn build # npm run build
```

## 👩‍💻 Technologies and Libraries Used

- React
- Chakra UI
- Styled Components
- uuid
- [OpenAI's GPT-3 API](https://openai.com/api/)

## ♿ Accessibility

This web application is fully responsive on mobile. It also has an accessibility score of 98 according to Google lighthouse.

## 📝 Notes

All components were developed from scratch and implemented based on the design system created for this challenge.

In regards data persistance, localStorage and sessionStorage were considered. Session storage only allowed data persistance until the tab or window was closed, while local storage persists until manual cache clearing (or if you web app clears the data). Due to these reasons, local storage was chosen.

For usability, the prompt reverts back to default and the prompt also clears after submission.
