## 📘 Redux Notes: Concepts, Flowcharts & Quick Revision

---

### 🧠 What is Redux?

Redux is a **state management library** for JavaScript apps, commonly used with **React**. It helps you manage application-wide state in a predictable and structured way.

---

### 🏛️ Core Principles

1. **Single Source of Truth** – The entire app state is stored in one object called the **store**.
2. **State is Read-Only** – You cannot change state directly. You **dispatch actions**.
3. **Changes via Pure Functions** – **Reducers** are pure functions that return new state based on the action.

---

### 🔁 Redux Flow (Cycle)

```
[Component/UI]
    |
    | useDispatch(action)
    V
[Action] – an object (e.g. { type: 'ADD_TODO' })
    |
    V
[Reducer] – updates state based on action type
    |
    V
[Store] – holds updated global state
    |
    V
[Component/UI] – re-renders via useSelector()
```

---

### 📦 Key Concepts

| Concept         | Description                                                                             |
| --------------- | --------------------------------------------------------------------------------------- |
| **Store**       | Holds your app's entire state tree. Created using `createStore()` or `configureStore()` |
| **Action**      | Plain JS object with a `type` property, describes what happened                         |
| **Reducer**     | Function that takes current state and action, returns new state                         |
| **Dispatch**    | Function to send actions to reducer                                                     |
| **useSelector** | React hook to access state from store                                                   |
| **Provider**    | Makes the Redux store available to your React components via context API                |

---

### 🛠️ Redux Setup Steps in React

1. Create `store.js` with `configureStore()` (Redux Toolkit)
2. Wrap `<App />` with `<Provider store={store}>` in `main.jsx`
3. Create `slice.js` using `createSlice()`
4. Use `useSelector()` to read state, `useDispatch()` to send actions

---

### ⚙️ Redux Toolkit Example

```js
// counterSlice.js
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 }
  }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### 📝 Quick Revision List

* ✅ `useSelector(state => state.sliceName.key)` → To access state
* ✅ `const dispatch = useDispatch()`
* ✅ `dispatch(actionCreator())` → To update state
* ✅ Reducer returns new state, never mutates original (except with Immer in Redux Toolkit)
* ✅ `Provider` wraps your app to supply the store

---

### 📚 Visual Mnemonic

> "**UI ➡️ Action ➡️ Reducer ➡️ Store ➡️ UI**"

This is the Redux **data loop** — a predictable circle of state changes.

---

### ✨ Extra Tips

* Use **Redux Toolkit** – less boilerplate
* Break your state into **slices**
* Write reusable actions
* Debug with **Redux DevTools** extension

---

Would you like a PDF export or an image of the flowchart too?
