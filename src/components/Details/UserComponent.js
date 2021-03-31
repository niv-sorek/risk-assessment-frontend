import React  from 'react';
import { Card, Col, Row, Container, ListGroup } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { GrDown } from 'react-icons/gr';

const UserComponent = (props) => {
	const uc = props.uc;
	return (
		<Accordion defaultActiveKey="1">
			<Card>
				<Accordion.Toggle as={Card.Header} eventKey="0">
					<Container>
						<Row
							style={{
								alignItems: 'center',
							}}
						>
							<Col md={3}>
								<h2>{uc.component.vendor}</h2>
							</Col>
							<Col xs={7}>
								Name: {uc.component.product}
								<br />
								Version: {uc.component.version}
							</Col>
							<Col>
								Risk:
								<h2 style={{ color: uc.level > 8 ? 'red' : null }}>{uc.level.toFixed(2)}</h2>
							</Col>
							<Col>
								<GrDown />
							</Col>
						</Row>
					</Container>
				</Accordion.Toggle>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<ListGroup variant="flush">
							{uc.relevant_vulnerabilities.map((v) => {
								return (
									<ListGroup.Item>
										<strong><a target="_blank" rel="noopener noreferrer" href={"https://nvd.nist.gov/vuln/detail/"+ v.cve}>{v.cve}</a></strong>- {v.level}
									</ListGroup.Item>
								);
							})}
						</ListGroup>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default UserComponent;
