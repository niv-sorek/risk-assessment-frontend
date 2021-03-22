import React from 'react';
import Card from 'react-bootstrap/Card';
import { FiUser } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import './UserListItem.css';
const UserListItem = (props) => {
	let history = useHistory();
	function handleUserClick(uid) {
		history.push(`/user/${uid}`);
	}
	const item = props.user;
	return (
		<Card
			className="text-center card-user"
			style={{ width: '10rem', display: 'inline-block' }}
			onClick={() => handleUserClick(item.id)}
		>
			<Card.Title>
				<FiUser size="3rem" color={item.suspicious || item.level > 9 ? 'red' : 'green'} />
				<h3>{item.id}</h3>
			</Card.Title>
			<Card.Body>
				<div>Level: {item.level}</div>
			</Card.Body>
		</Card>
	);
};

export default UserListItem;
