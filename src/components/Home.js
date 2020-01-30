import React from 'react'
import People from './People'
import { Container, Segment} from 'semantic-ui-react'

const Home = () => (
    <>
      <Container>
        <Segment inverted style={{ height: '200px', width: '500px', margin: 'auto', top: '20px', boxShadow: '5px 5px 5px black' }}>
          <h1 style={{ textAlign: 'center', padding: '20px', color: '#ffe135', fontFamily: 'Orbitron' }}> SWAPI </h1>
          <p style={{ textAlign: 'center'}}> An API practice project or an official galactic registry. Give a character a click to find out more. </p>
        </Segment>
          <People /> 
      </Container>
    </>
)


export default Home