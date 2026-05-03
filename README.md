# Students List Filter

A simple **React-based Student Management Dashboard** that demonstrates filtering, mapping, and state management. This project showcases how to manage and display student data with dynamic filters for age, course, and status.

## 🚀 Live Demo
Check out the deployed app here:  
👉 [Students List Filter](https://students-list-filter.vercel.app/)

## 📂 Repository
Source code available on GitHub:  
👉 [Students-list-filter](https://github.com/dhivakar07/Students-list-filter)

## ✨ Features
- Display all students with details (name, age, course, status).
- Filter by age (e.g., age greater than 21).
- Filter by course (MERN Stack, Python, Java).
- Filter by status (Completed, Ongoing).
- Responsive UI with clean styling for recruiter-ready presentation.
- Reusable components (`Students`, `StudentsList`) with props and state management.

## 🛠️ Tech Stack
- **React** (functional components, hooks)
- **JavaScript** (ES6+ features)
- **CSS** (responsive design, recruiter polish)
- **Vercel** (deployment)

## 📖 How It Works
1. Student data is stored in an array of objects.
2. The `StudentsList` component uses **`useState`** to manage filtered data.
3. Filter functions (`ageGreater21`, `mernStudents`, `pythonOrJava`, `hasStatus`) update the state.
4. The UI renders the filtered list dynamically using **`.map()`**.


