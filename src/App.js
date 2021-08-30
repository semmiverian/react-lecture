import { Component } from 'react'
import Counter from './components/Counter'
import UserList from './components/UserList'

export default class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-300 to-violet-500">
        <div className="max-w-2xl mx-auto p-4">
          {/* <Counter /> */}
          <UserList />
        </div>
      </div>
    )
  }
}
