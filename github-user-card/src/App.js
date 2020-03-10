import React from 'react';
import axios from 'axios';
import UserList from './components/UserList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.all([
      axios.get(`https://api.github.com/users/cdifranco1`),
      axios.get(`https://api.github.com/users/cdifranco1/followers`)
    ])
    .then(axios.spread((mainUser, remainingUsers) => {
      this.setState({users: [mainUser.data, ...remainingUsers.data]})
    }))
  }

  render(){
    console.log(this.state)
    return (
      <UserList users={this.state.users} />
    )
  }
}

export default App;
