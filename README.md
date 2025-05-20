# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

📘 Key Concepts I Learned
1. React Basics Refresher
Created a functional component (App) using React.

Used useState to manage application state, such as the current input.

Passed props to child components (Keys) and handled events.

Rendered dynamic UI using .map().

2. State Management with useState
Maintained the input value of the calculator using useState.

Updated the state based on user interactions (clicking buttons).

Learned how to create a controlled component (<input value={...} />).

3. Event Handling in React
Used onClick events to capture user input.

Passed data from child (Keys) to parent (App) using callback functions.

Handled conditionals (e.g., evaluating the input string on "=" click).

4. Component Design and Props
Created a reusable Keys component.

Passed value and handle_onclick props to make it flexible.

Used destructuring to access props inside a functional component.

5. Tailwind CSS
Used Tailwind utility classes instead of traditional CSS.

Created a clean UI with minimal effort.

Learned about responsive layout with Flexbox and Grid using Tailwind.

6. Vite
Used Vite as a fast build tool to scaffold the project (npm create vite@latest).

Enjoyed faster hot reloads and better developer experience compared to Create React App.

7. Safe eval() Usage
Used eval() to calculate input (with try-catch for safety).
