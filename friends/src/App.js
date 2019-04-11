import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";

class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		} 
	}	
	addFriend = (e, newFriend) => {
		axios.post(
			"https://lambda-school-1-zoverlvx.c9users.io:8080/friends",
			newFriend
		).then(res => this.setState({friends: res.data}))
		.catch(err => console.log(err))
		e.preventDefault();
	}

	deleteFriend = (id) => {
		axios.delete(
			`https://lambda-school-1-zoverlvx.c9users.io:8080/friends/${id}`,
		)
		.then(res => {
			this.setState({friends: res.data});
		})
		.catch(err => console.log(err));
	}

	componentDidMount() {
		axios
			.get("https://lambda-school-1-zoverlvx.c9users.io:8080/friends")
			.then(res => {
				this.setState({friends: res.data});
		}).catch(err => console.log(err))
	}
	render() {
		const {friends} = this.state;
    	return (
      		<div className="App">
				<FriendsList deleteFriend={this.deleteFriend} friends={friends} />
				<FriendsForm friends={friends} addFriend={this.addFriend}/>
      		</div>
		);
  	}
}

export default App;
