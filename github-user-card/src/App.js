import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import UserList from './components/UserList';
import UserCard from './components/UserCard';
import SearchForm from './components/SearchForm';


let DEFAULT_QUERY = 'cdifranco1'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: DEFAULT_QUERY,
      searchKey: '',
      mainUser: {},
      followers: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({searchKey: this.state.searchTerm})
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.searchKey !== this.state.searchKey){
      axios.all([
        axios.get(`https://api.github.com/users/${this.state.searchKey}`),
        axios.get(`https://api.github.com/users/${this.state.searchKey}/followers`)
      ])
      .then(axios.spread((mainUser, remainingUsers) => {
        this.setState({
          mainUser: mainUser.data,
          followers: remainingUsers.data
        })
      }))
    }
  }


  componentDidMount(){
    axios.all([
      axios.get(`https://api.github.com/users/${this.state.searchTerm}`),
      axios.get(`https://api.github.com/users/${this.state.searchTerm}/followers`)
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
        <SearchForm onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.searchTerm}/>
        <UserCard user={this.state.mainUser} />
        <UserList users={this.state.followers} />
      </Container>
    )
  }
}

export default App;
