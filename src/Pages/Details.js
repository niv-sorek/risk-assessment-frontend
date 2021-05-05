import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import CanvasJSReact from '../assets/canvasjs.react';
import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from '../UIElements/LoadingSpinner';
import './Details.css';
import UserComponent from '../components/Details/UserComponent';
const ControlPanel = () => {
  const { uid } = useParams();

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
  const toggleSuspicious = () => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/user/' + uid, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_suspicious: !user.suspicious }),
    })
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  return (
    <React.Fragment>
      {isLoading && (
        <div className='center'>
          <LoadingSpinner />
        </div>
      )}
      {error && (
        <div className='center'>
          <h1>User ID: {uid} was not found</h1>
        </div>
      )}
      {!isLoading && user && (
        <Container>
          <Row>
            <Col md={4}>
              <CanvasJSChart options={options} />
            </Col>
            <Col>
              {uid && <h1 className='username'>{user.id}</h1>}
              {uid && (
                <Button
                  variant={user.suspicious ? 'danger' : 'info'}
                  onClick={toggleSuspicious}
                >
                  {!user.suspicious? ("Not "):null }SUSPICIOUS
                </Button>
              )}
              <h5 className='username'>Risk Level: {user.level}</h5>
            </Col>
          </Row>
          <div style={{marginTop:20 , marginBottom:30}}>
            <h2>{user.user_components.length} Components</h2>
            {user.user_components.length > 0 &&
              user.user_components.map((x) => {
                return <UserComponent uc={x} />;
              })}
          </div>
        </Container>
      )}
    </React.Fragment>
  );
};
export default ControlPanel;
