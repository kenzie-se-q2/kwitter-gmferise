import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Segment } from 'semantic-ui-react';

function Navigation () {
return(
    <div className="navBar">
 <Container textAlign='center'>
    <Grid columns={3} doubling>
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