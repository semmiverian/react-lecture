import React, { Component, useState, useEffect } from 'react'

export default function Counter({ defaultCounter }) {
  const [counter, setCounter] = useState(defaultCounter)

  useEffect(() => {
    console.log(counter, 'dalam useEffect')
  }, [counter])

  function decrementCounter() {
    setCounter(counter - 1)
  }

  function incrementCounter() {
    console.log(counter, 'sebelum di setState')
    setCounter(counter + 1)
    console.log(counter, 'setelah di setState')
  }

  return (
    <div className="bg-white p-3 shadow rounded-md w-full">
      <h1 className="leading-8 mb-4">Counter</h1>

      <div className="flex justify-between items-baseline">
        <button
          onClick={decrementCounter}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
        >
          Kurangkan Angka
        </button>

        <h2 className="text-xl leading-8 tracking-wide">{counter}</h2>
        <button
          onClick={incrementCounter}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
        >
          Tambahkan Angka
        </button>
      </div>
    </div>
  )
}
