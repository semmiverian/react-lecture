import React, { Component, useState, useEffect } from 'react'
import User from './User'
import Loading from './../assets/loading.gif'
import useFetch from '../hooks/useFetch'

export default function UserList() {
  const [limit, setLimit] = useState(5)

  const { data, isLoading } = useFetch(
    `https://randomuser.me/api/?results=${limit}`
  )

  const { data: todos, isLoading: isTodoLoading } = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  )

  // const [users, setUsers] = useState([])
  // const [isLoading, setLoading] = useState(false)

  // const [todos, setTodos] = useState([])
  // const [isTodoLoading, setIsTodoLoading] = useState(false)

  // useEffect(() => {
  //   console.log('Use Effect dijalankan')
  //   fetch(`https://randomuser.me/api/?results=${limit}`)
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data.results))
  //     .finally(() => setLoading(false))

  //   return function () {
  //     console.log('Cleanup function')
  //   }
  // }, [limit])

  // useEffect(() => {
  //   setIsTodoLoading(true)
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => res.json())
  //     .then((data) => setTodos(data))
  //     .finally(() => setIsTodoLoading(false))
  // }, [])

  // async function fetchData() {
  //   setLoading(true)
  //   try {
  //     const res = await fetch(`https://randomuser.me/api/?results=${limit}`)
  //     const data = await res.json()
  //     setUsers(data.results)
  //   } catch (err) {
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  function addLimit() {
    setLimit(limit + 5)
  }

  if (isLoading) {
    return <h1>Lagi loading bang</h1>
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
          {data?.results?.map((user) => (
            <User key={user.login.uuid} user={user} />
          ))}
        </ul>
      )}

      {isTodoLoading ? (
        <img src={Loading} className="w-60 h-60 mx-auto" />
      ) : (
        <ul className="list-none divide-y divide-gray-200">
          {todos.map((todo) => (
            <h1 key={todo.id}>{todo.title}</h1>
          ))}
        </ul>
      )}
    </div>
  )
}
