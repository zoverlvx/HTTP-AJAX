import React, {useState} from "react";
//FriendsForm
export default function(props) {
	const [state, setState] = useState({
		name: "",
		age: "",
		email: ""
	});
	function handleChange(e) {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}
	return (
		<>
		<h2>Friend Form</h2>
		<form onSubmit={(e) => props.addFriend(e, state)}>
			<input 
				type="text"
				name="name"
				placeholder="name"
				value={state.name}
				onChange={handleChange}
			/>
			<input 
				type="text"
				name="age"
				placeholder="age"
				value={state.age}
				onChange={handleChange}	
			/>
			<input 
				type="email"
				name="email"
				placeholder="email"
				value={state.email}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
		</>
	);
}
