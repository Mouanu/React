# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.






📄 React-UseState-Explained.md
markdown
Copy code
# React `useState` & Context – Confusions Cleared 🧠

---

## ❓ Q1: Does `useState` store key-value pairs?

**Answer:** Not by default. `useState` can store **any data type**:
- String
- Number
- Boolean
- Object (which *is* key-value based)
- Array
- Function
- null / undefined

**Example:**
```js
const [user, setUser] = useState({ username: "", password: "" });
Here, user is an object → so yes, it's key-value based, but only because you chose it to be.

❓ Q2: How does useState actually store values?
Conceptual:
React internally maintains a hidden structure where each state value is indexed by the order of the useState() call during render.

What happens:
useState(initialValue) registers that value

React stores it (like in a hidden array)

setState(newVal) → updates it → triggers re-render

You don't access that structure — React just gives you:

js
Copy code
[stateValue, setStateFunction]
❓ Q3: What is setUser({ username, password }) doing?
It’s passing a single object (not two values).

js
Copy code
setUser({
  username: "Anushila",
  password: "1234"
});
You’re telling React: “Hey, replace user with this object.”

❓ Q4: Does useContext(UserContext) really give me the same setUser?
✅ YES.

When you write:

js
Copy code
<UserContext.Provider value={{ user, setUser }}>
That means anywhere you call:

js
Copy code
const { setUser } = useContext(UserContext)
You’re pulling out the exact same setUser function created with:

js
Copy code
const [user, setUser] = useState(null);
❓ Q5: Why use e.preventDefault() in a button that's not inside a form?
If your button is not inside a <form>, then e.preventDefault() isn't needed.

But people use it:

Out of habit

For future-proofing (maybe the UI will change later)

If they refactor and wrap it in a <form>, it’s already safe

✅ So you can safely remove e.preventDefault() if there's no form.

✅ Bonus Tips:
React does not merge object state automatically. So be careful when updating part of an object.

js
Copy code
setUser({ username: "newname" }); 
// This will remove password!

setUser(prev => ({ ...prev, username: "newname" }));
// ✅ Safe way to update one key
🧠 TL;DR Summary
Concept	Key Point
useState	Stores any data (including objects)
setUser({ a, b })	Passing one object with keys a, b
useContext	Gives access to whatever was passed as value
Button & preventDefault	Needed only inside <form>
React State	Works like a smart locker that triggers re-renders

