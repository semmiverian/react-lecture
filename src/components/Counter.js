import React, { Component, useState } from 'react'

export default function Counter({ defaultCounter }) {
  const [counter, setCounter] = useState(defaultCounter)

  function decrementCounter() {
    setCounter(counter - 1)
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
          onClick={() => setCounter(counter + 1)}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
        >
          Tambahkan Angka
        </button>
      </div>
    </div>
  )
}

// export default class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0,
//     }
//   }

//   incrementCounter = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     })
//   }

//   decrementCounter = () => {
//     this.setState({
//       counter: this.state.counter - 1,
//     })
//   }

//   render() {
//     return (
//       <div className="bg-white p-3 shadow rounded-md w-full">
//         <h1 className="leading-8 mb-4">Counter</h1>

//         <div className="flex justify-between items-baseline">
//           <button
//             onClick={this.decrementCounter}
//             className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
//           >
//             Kurangkan Angka
//           </button>

//           <h2 className="text-xl leading-8 tracking-wide">
//             {this.state.counter}
//           </h2>
//           <button
//             onClick={this.incrementCounter}
//             className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500  transition ease-in-out"
//           >
//             Tambahkan Angka
//           </button>
//         </div>
//       </div>
//     )
//   }
// }
