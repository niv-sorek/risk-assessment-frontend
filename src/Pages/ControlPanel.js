import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UsersList from '../components/Panel/UsersList';
import { Container, Col, Row } from 'react-bootstrap';
import CanvasJSReact from '../assets/canvasjs.react';
import { useHttpClient } from '../http-hook';

const ControlPanel = (props) => {
	const [users, setUsers] = useState();
	const [options, setOptions] = useState();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/organisation');
				setUsers(responseData.users);
				const okCount = responseData.users.filter((x) => x.level < 10 && !x.suspicious).length;
				console.log(okCount);
				setOptions({
					title: {
						text: '',
					},
					data: [
						{
							type: 'pie',
							dataPoints: [
								{ label: 'OK', y: okCount },
								{ label: 'Intervention Required', y: responseData.users.length - okCount },
							],
						},
					],
				});
			} catch (err) {}
		};
		fetchUsers();
	}, [sendRequest]);
	// var CanvasJS = CanvasJSReact.CanvasJS;

	var CanvasJSChart = CanvasJSReact.CanvasJSChart;

	return (
		<>
			{users && users.length>0 &&options && (
				<Container>
					<Row>
						<Col md={4}>
							<CanvasJSChart options={options} />
						</Col>
						<Col>
							<UsersList users={users} />
						</Col>
					</Row>
				</Container>
			)}
			{!users && <h2> error</h2>}
		</>
	);
};
export default ControlPanel;