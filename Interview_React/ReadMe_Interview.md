```
Q: What’s something tricky you learned while working with React?

👉 “I once made a small counter app where I used multiple setCounter(counter + 1) calls. I expected the counter to increase by 4, but it only increased by 1. This helped me realize that React batches state updates and treats each setCounter(counter + 1) as using the same stale value. To fix it, I used the functional form — setCounter(prev => prev + 1) — which respects the correct previous value each time. Since then, I always prefer the functional updater when doing sequential state changes.”

```



````markdown
# 🧮 React Counter App

A simple React app that demonstrates how state updates work using the `useState` hook, with a special focus on how multiple `setState` calls are handled and batched.

---

## 🚀 Features

- Displays a counter initialized to 0.
- Two buttons:
  - **Add Value**: Increments the counter.
  - **Decrease Value**: Decrements the counter only if the value is greater than 0.
- Demonstrates React state batching behavior.

---

## 🧠 Key Concepts Covered

### 🔄 useState and setState

This project explores how React batches multiple `setState` calls and how **direct state mutation should be avoided**.

```js
const [counter, setCounter] = useState(0);
````

### ❗ What Went Wrong

In the original `addValue` function:

```js
const addValue = () => {
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  console.log("clicked ", counter);
}
```

Each `setCounter(counter + 1)` uses the **same stale value** of `counter`.
So the counter only increases by **1**, not **4**.

---

### ✅ How We Fixed It

We used the **functional updater form** of `setCounter`, which ensures each update uses the latest value:

```js
setCounter((prev) => (prev + 1));
```

So the fixed `addValue` function is:

```javascript

const addValue = () => {
    setCounter((prev) => (prev + 1));
    setCounter((prev) => (prev + 1));
    setCounter((prev) => (prev + 1));
    setCounter((prev) => (prev + 1));
    
    }
```

This correctly increases the counter by **4**.

---

### 🛑 Direct State Mutation is Bad

In the original `removeValue`:

```js
if (counter > 0) {
  counter = counter - 1;
  setCounter(counter);
}
```

Here, `counter` is being mutated directly — **this should be avoided**.

✅ Correct version:

```js
if (counter > 0) {
  setCounter(prev => prev - 1);
}
```

---

## 📷 Screenshot

![React Counter UI](screenshot.png) <!-- You can add an actual screenshot here -->

---

## 🛠️ How to Run

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the app:

   ```bash
   npm run dev
   ```

---

## 👩‍💻 Made By

**Anushila Biswas**
