import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import CanvasJSReact from '../assets/canvasjs.react';
import { useHttpClient } from '../http-hook';
import LoadingSpinner from '../LoadingSpinner';
import './Details.css';
import UserComponent from '../components/Details/UserComponent';
const ControlPanel = () => {
	const { uid } = useParams();
	// const user = {
	// 	id: 'Lir',
	// 	suspicious: true,
	// 	user_components: [
	// 		{
	// 			component: {
	// 				vendor: 'Microsoft',
	// 				product: 'Windows',
	// 				version: '10',
	// 			},
	// 			update: '1.1.21',
	// 			relevant_vulnerabilities: [
	// 				{
	// 					fix: {
	// 						value: '1602572400',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-16937',
	// 					exploits: 0,
	// 					cvss: 4.3,
	// 					level: 2.15,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1597104000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1476',
	// 					exploits: 0,
	// 					cvss: 2.1,
	// 					level: 1.05,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1597104000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1046',
	// 					exploits: 0,
	// 					cvss: 9.3,
	// 					level: 9.3,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1594684800',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1147',
	// 					exploits: '1',
	// 					cvss: 7.5,
	// 					level: 7.5,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1589241600',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1108',
	// 					exploits: 0,
	// 					cvss: 5,
	// 					level: 2.5,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1589241600',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1066',
	// 					exploits: 0,
	// 					cvss: 4.6,
	// 					level: 2.3,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1578960000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-0646',
	// 					exploits: 0,
	// 					cvss: 10,
	// 					level: 10,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1578960000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-0606',
	// 					exploits: 0,
	// 					cvss: 9.3,
	// 					level: 9.3,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1578960000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-0605',
	// 					exploits: 0,
	// 					cvss: 9.3,
	// 					level: 9.3,
	// 				},
	// 			],
	// 			level: 10,
	// 		},
	// 		{
	// 			component: {
	// 				vendor: 'HP',
	// 				product: 'Deskjet 6563',
	// 				version: '10',
	// 			},
	// 			update: '1.1.21',
	// 			relevant_vulnerabilities: [
	// 				{
	// 					fix: {
	// 						value: '1602572400',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-16937',
	// 					exploits: 0,
	// 					cvss: 4.3,
	// 					level: 2.15,
	// 				},

	// 			],
	// 			level: 3,
	// 		},
	// 		{
	// 			component: {
	// 				vendor: 'Apple',
	// 				product: 'Hello HEllo',
	// 				version: '10',
	// 			},
	// 			update: '1.1.21',
	// 			relevant_vulnerabilities: [
	// 				{
	// 					fix: {
	// 						value: '1589241600',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1108',
	// 					exploits: 0,
	// 					cvss: 5,
	// 					level: 2.5,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1589241600',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-1066',
	// 					exploits: 0,
	// 					cvss: 4.6,
	// 					level: 2.3,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1578960000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-0646',
	// 					exploits: 0,
	// 					cvss: 10,
	// 					level: 10,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1578960000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-0606',
	// 					exploits: 0,
	// 					cvss: 9.3,
	// 					level: 9.3,
	// 				},
	// 				{
	// 					fix: {
	// 						value: '1578960000',
	// 						name: 'Patch',
	// 					},
	// 					cve: 'CVE-2020-0605',
	// 					exploits: 0,
	// 					cvss: 9.3,
	// 					level: 9.3,
	// 				},
	// 			],
	// 			level: 5,
	// 		},
	// 	],
	// 	level: 10,
	// };
	const [user, setUser] = useState();
	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const [options, setOptions] = useState({
		title: {
			text: '',
		},

		data: [
			{
				type: 'pie',
				dataPoints: [
					{ label: 'Ok', y: 0 },
					{ label: 'Risky', y: 0 },
				],
			},
		],
	});
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/user/' + uid);
				setUser(responseData);

				console.log(responseData);
			} catch (err) {}
		};
		fetchUsers();
	}, [sendRequest, uid, setOptions]);

	useEffect(() => {
		if (user) {
			const ok = user.user_components.filter((x) => x.level < 8).length;
			const notOk = user.user_components.length - ok;
			setOptions({
				title: {
					text: '',
				},

				data: [
					{
						type: 'pie',
						dataPoints: [
							{ label: 'Ok', y: ok },
							{ label: 'Risky', y: notOk },
						],
					},
				],
			});
		}
	}, [setOptions, user]);
	var CanvasJSChart = CanvasJSReact.CanvasJSChart;

	return (
		<React.Fragment>
			{/* {isLoading && (
				<div className="center">
					<LoadingSpinner />
				</div>
			)} */}
			{!isLoading && user && (
				<Container>
					<Row>
						<Col md={4}>
							<CanvasJSChart options={options} />
						</Col>
						<Col>
							{uid && <h1 className="username">{user.id}</h1>}
							<h5 className="username">Risk Level: {user.level}</h5>
							Components count: {user.user_components.length}
						</Col>
					</Row>
					{user.user_components.length > 0 &&
						user.user_components.map((x) => {
							return <UserComponent uc={x} />;
						})}
				</Container>
			)}
		</React.Fragment>
	);
};
export default ControlPanel;
