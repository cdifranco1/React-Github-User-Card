import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import UserList from './components/UserList';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mainUser: {},
      followers: []
    }
  }

  componentDidMount(){
    axios.all([
      axios.get(`https://api.github.com/users/cdifranco1`),
      axios.get(`https://api.github.com/users/cdifranco1/followers`)
    ])
    .then(axios.spread((mainUser, remainingUsers) => {
      this.setState({
        mainUser: mainUser.data,
        followers: remainingUsers.data
      })
    }))
  }

  render(){
    console.log(this.state)
    return (
      <Container>
        <UserCard user={this.state.mainUser} />
        <UserList users={this.state.followers} />
      </Container>
    )
  }
}

export default App;
