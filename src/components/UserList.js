import React, { Component, useState, useEffect } from 'react'
import User from './User'
import Loading from './../assets/loading.gif'

export default function UserList() {
  const [users, setUsers] = useState([])
  const [limit, setLimit] = useState(5)
  const [isLoading, setLoading] = useState(false)

  // 1. Setiap kali ada state yang berubah, maka callback functionnya
  //    akan dijalankan kembali
  // 2. array of dependencies => []
  //     hanya akan jalan satu kali, componentDidMount
  // 3. [limit] => pertama kali render function dijalankan
  //               ketika limit berubah function dijalankan
  useEffect(() => {
    console.log('Use Effect dijalankan')
    fetch(`https://randomuser.me/api/?results=${limit}`)
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .finally(() => setLoading(false))

    return function () {
      console.log('Cleanup function')
    }
  }, [limit])

  async function fetchData() {
    setLoading(true)
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${limit}`)
      const data = await res.json()
      setUsers(data.results)
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }

  function addLimit() {
    setLimit(limit + 5)
  }

  return (
    <div className="bg-white p-3 shadow rounded-md w-full">
      <div className="flex justify-between items-baseline">
        <h1 className="leading-8 mb-4">User Data</h1>
        <button
          onClick={addLimit}
          className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500 transition ease-in-out"
        >
          Add More Data
        </button>
      </div>

      {isLoading ? (
        <img src={Loading} className="w-60 h-60 mx-auto" />
      ) : (
        <ul className="list-none divide-y divide-gray-200">
          {users.map((user) => (
            <User key={user.login.uuid} user={user} />
          ))}
        </ul>
      )}
    </div>
  )
}
// export default class UserList extends Component {
//   constructor() {
//     super()

//     this.state = {
//       users: [],
//       limit: 5,
//     }
//   }

//   fetchData = () => {
//     fetch(`https://randomuser.me/api/?results=${this.state.limit}`)
//       .then((res) => res.json())
//       .then((data) =>
//         this.setState({
//           users: data.results,
//         })
//       )
//   }

//   addLimit = () => {
//     this.setState({ limit: this.state.limit + 5 })
//   }

//   componentDidMount() {
//     this.fetchData()
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.limit !== prevState.limit) {
//       this.fetchData()
//     }
//   }

//   render() {
//     return (
//       <div className="bg-white p-3 shadow rounded-md w-full">
//         <div className="flex justify-between items-baseline">
//           <h1 className="leading-8 mb-4">User Data</h1>
//           <button
//             onClick={this.addLimit}
//             className="bg-gradient-to-r from-green-400 to-sky-500 py-2 px-4 text-sky-100 rounded-md shadow hover:from-amber-400 hover:to-rose-500 transition ease-in-out"
//           >
//             Add More Data
//           </button>
//         </div>

//         {/* <img src={loading} className="w-60 h-60 mx-auto" /> */}

//         <ul className="list-none divide-y divide-gray-200">
//           {this.state.users.map((user) => (
//             <User key={user.login.uuid} user={user} />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }
