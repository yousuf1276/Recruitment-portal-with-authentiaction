import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('loggedInEmail'); // Remove email from localStorage on logout
      navigate('/home');
    }
  };

  return (
    <div className="dashboard-background">
      <Container className="dashboard-container">
        <Row>
          <Col>
            <Card className="dashboard-card">
              <Card.Body>
                <Card.Title>Welcome to the Dashboard</Card.Title>
                <Card.Text>
                  This is your portal where you can manage your activities.
                </Card.Text>
                <div className="navigation-buttons">
                  <Button className='m-2' variant="primary" onClick={() => navigate('/profile')}>Profile</Button>
                  <Button className='m-2' variant="primary" onClick={() => navigate('/settings')}>Settings</Button>
                  <Button className='m-2' variant="primary" onClick={() => navigate('/notifications')}>Notifications</Button>
                </div>
                <Button variant="danger" onClick={handleLogout}>Logout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
