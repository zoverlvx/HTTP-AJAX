import React from "react";
import Friend from "./Friend";

export default function(props) {
	const style = {listStyleType: "none"}; 
	return (
		<ul style={style}>
			{props.friends.map((friend, i) => {
					return <Friend key={i} friend={friend} deleteFriend={props.deleteFriend}/>;
				})
			}
		</ul>
	)
}
