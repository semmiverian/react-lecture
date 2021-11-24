1. Apa itu `hooks` pada functional component?

   - Pengganti state di dalam functional component
   - Pengganti lifecycle component react
   - Fitur yang bisa menggunakan API react di dalam functional component

2. Apa fungsi dari hooks `useState` ?
   Menggunakan state di dalam functional component

3. Jelaskan cara penulisan hooks `useState`?

```jsx
// code disini
const [count, setCount] = useState(1)
```

3. Apa hasil dari console log dibawah ini

```jsx
const [count, setCounter] = useState(0)

// Asumsi Fungsi ini baru pertama kali dijalankan
function addCounter() {
  console.log(count) // ? 0, 1
  setCounter(count + 1)
  console.log(count) // ? 1, 1
}
```

4. Apa fungsi dari hooks `useEffect`?
   Pengganti lifecycle pada class component react

   - componentDidMount
   - componentDidUpdate
   - componentWillUnmount

5. Jelaskan cara penulisan hooks `useEffect`?

   ```jsx
   useEffect(() => {}, [])
   ```

6. Bagaimana cara membuat hooks `useEffect` yang hanya akan dijalankan satu kali?

```jsx
// code disini
```

7. Melihat code dibawah ini, bagaimana cara membuat `useEffect` yang akan jalan setiap kali value `limit` berubah?

```jsx
const [limit, setLimit] = useState(5)

function addLimit() {
  setLimit(limit + 5)
}

// code disini
useEffect(() => {}, [limit])
```

8. Apa yang akan terjadi dengan kode dibawah ini?

```jsx
const [users, setUsers] = useState([])

useEffect(() => {
  setUsers([{ name: 'Kosasih', id: 1 }])
})
// - Looping terus
// - Cuman sekali
// = Ga jalan sama sekali
```

9. Apa yang terjadi dengan kode dibawah ini?

```jsx
const [users, setUsers] = useState([])

useEffect(() => {
  setUsers([{name: 'Kosasih', id: 1}])
}. [users])
```

10. Apa itu `cleanup` function pada `useEffect`?
    `componentWillUnmount`

11. Apa itu `optional chaining`
