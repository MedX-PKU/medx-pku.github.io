# MedX Laboratory (医维矩阵实验室)

[![Deploy to GitHub Pages](https://github.com/MedX-PKU/medx-pku.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/MedX-PKU/medx-pku.github.io/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vue.js](https://img.shields.io/badge/Vue.js-35B995?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Medical AI Laboratory at Peking University

## 🌐 Live Demo

**[🚀 Visit our website](https://medx-pku.github.io/)**

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 About

MedX Laboratory (医维矩阵实验室) is a laboratory supported by the National Engineering Research Center for Software Engineering (NERC) at Peking University, led by Professor Yasha Wang and managed by Research Assistant Professor Liantao Ma. The lab collaborates extensively with the University of Hong Kong, the University of Edinburgh, and other institutions. Our collaborating hospitals include Peking University Third Hospital, Peking University Cancer Hospital, and others.

Our research focuses on:
- 🧠 **Large Language Models** for medical applications
- 📊 **Electronic Health Record** analysis and prediction
- 🤖 **Multi-Agent Systems** for healthcare
- 🔬 **AI for Science** research platforms

## ✨ Features

- 🌍 **Multilingual Support**: Chinese and English language switching
- 📱 **Responsive Design**: Optimized for mobile and desktop devices
- 🔍 **Search & Filter**: Advanced publication search and filtering
- 👥 **Team Profiles**: Detailed information about our research team
- 📄 **Publication Management**: Organized display of research papers
- 🎨 **Modern UI**: Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **Internationalization**: Vue I18n
- **Icons**: Heroicons
- **Deployment**: GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MedX-PKU/medx-pku.github.io.git
   cd medx-pku.github.io
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install
   ```

3. **Start development server**
   ```bash
   # Using pnpm
   pnpm dev

   # Or using npm
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint and fix code
pnpm lint
```

### Project Structure

```
src/
├── components/          # Vue components
│   ├── common/         # Reusable components
│   ├── home/           # Homepage components
│   ├── people/         # Team components
│   └── publications/   # Publication components
├── data/               # Static data
├── locales/            # Internationalization files
├── router/             # Vue Router configuration
├── stores/             # Pinia stores
├── views/              # Page components
├── App.vue             # Root component
└── main.js             # App entry point
```

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Automatic deployment**:
   - The `.github/workflows/deploy.yml` workflow will automatically deploy on:
     - Push to `main` branch
     - Manual workflow dispatch

### Manual Deployment

1. **Build the project**:
   ```bash
   pnpm build
   ```

2. **Deploy the `dist/` folder to GitHub Pages**

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Use TypeScript for new features (if applicable)
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- National Engineering Research Center for Software Engineering (NERC) at Peking University
- Professor Yasha Wang and the NERC leadership
- Our collaborating institutions: University of Hong Kong, University of Edinburgh, and others
- Our collaborating hospitals: Peking University Third Hospital, Peking University Cancer Hospital, and others
- The open-source community for the amazing tools and libraries
- All contributors and team members

## 📞 Contact

- **Lab Director**: [Liantao Ma](mailto:malt@pku.edu.cn)
- **GitHub**: [MedX-PKU Organization](https://github.com/MedX-PKU)
- **Issues**: [Report issues here](https://github.com/MedX-PKU/medx-pku.github.io/issues)

---

**⭐ If this project helped you, please give it a star!**