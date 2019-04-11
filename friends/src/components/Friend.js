import React from "react";

export default function({deleteFriend, friend: {id, name, age, email}}) {
	const style = {marginBottom: "30px"};

	function handleClick(e) {
		e.preventDefault();
		deleteFriend(id);
	}

	return (
		<>
			<button onClick={handleClick}>Remove</button>
			<li>Name: {name}</li>
			<li>Age: {age}</li>
			<li style={style}>Email: {email}</li>
		</>
	)
}
