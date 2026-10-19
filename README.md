# DailyNotes 📝

A simple and modern personal notes application built with **React.js** and **Tailwind CSS**. DailyNotes allows users to create, view, and delete notes through a clean, responsive interface.

## ✨ Features

- **Add Notes:** Create notes using a title and description.
- **View Notes:** Display saved notes as cards in the Recent Notes section.
- **Delete Notes:** Remove notes you no longer need.
- **Date and Time:** Display the creation date and time on notes.
- **Responsive UI:** Layout designed to adapt to different screen sizes.
- **Modern Design:** Dark theme with a clean layout and styled note cards.
- **Reusable Components:** Organized React components for the navbar, notes section, and footer.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- HTML5
- Git and GitHub

## 📂 Project Structure

```text
DailyNotes/
├── public/
├── src/
│   ├── assets/
│   ├── component/
│   │   ├── AddNotes.jsx
│   │   ├── Footer.jsx
│   │   └── NavBaar.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## 🚀 Getting Started

Follow these steps to run DailyNotes locally.

### Prerequisites

Install the following on your computer:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/DailyNotes.git
```

**2. Navigate to the project directory**

```bash
cd DailyNotes
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 🏗️ Build for Production

To create a production build, run:

```bash
npm run build
```

Vite generates the production-ready files in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## 🎨 Design

DailyNotes uses a dark-themed interface with contrasting colors for readability.

- **Background:** `#0F172A`
- **Card Background:** `#1E293B`
- **Border:** `#334155`
- **Accent Color:** `#615FFF`

## 🔮 Future Improvements

- Store notes in local storage so they remain available after refreshing the page.
- Edit existing notes.
- Add search and filtering functionality.
- Organize notes by categories.
- Add favorite notes.
- Improve date and time handling for individual notes.

## 👨‍💻 Author

**Mayur Kadam**

GitHub: [YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

If you find this project useful, feel free to explore the code and suggest improvements.
