import React from 'react';

import UserListItem from './UserListItem';
import './UsersList.css';

const UsersList = (props) => {
	const users = props.users
	return (
			users.map((user) => {
				return <UserListItem user={user} key={user.id} />;
			})
	);
};

export default UsersList;
