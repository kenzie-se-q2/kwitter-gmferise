import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Segment, Button } from 'semantic-ui-react';

function Navigation (props) {
return(
    <div className="navBar">
 <Container textAlign='center'>
    <Grid columns={3} doubling>
    <Grid.Column width={3}>
        <Segment><Container textAlign='center'><Button onClick={() => props.history.pop()}>Back</Button></Container></Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment><Container textAlign='center'><Link to="/">Home</Link></Container></Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment><Container textAlign='center'><Link to="/login">Login</Link></Container></Segment>
      </Grid.Column>
      <Grid.Column width={3}>
        <Segment><Container textAlign='center'><Link to="/signup">Create Account</Link></Container></Segment>
      </Grid.Column>
    </Grid>
 </Container>
    </div>
);
}

export default Navigation;