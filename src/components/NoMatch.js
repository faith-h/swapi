import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment } from 'semantic-ui-react'

const NoMatch = () => (
  <>
  <Container>
        <Segment inverted style={{ height: '200px', width: '500px', margin: 'auto', top: '20px', boxShadow: '5px 5px 5px black' }}>
          <h1 style={{ textAlign: 'center', padding: '20px', color: '#ffe135', fontFamily: 'Orbitron' }}> SWAPI </h1>
          <p style={{ textAlign: 'center'}}> An API practice project or an official galactic registry. Give a character a click to find out more. </p>
        </Segment>
        <div style={{ height: '40px'}}/>
        <Segment inverted style={{margin: '10px 10px 10px 10px', padding: '20px', boxShadow: '5px 5px 5px black' }}>
        <h3 style={{ fontFamily: 'Orbitron', textAlign: 'center'}}> This is not the page you're looking for. Trying returing <Link to='/'> home? </Link></h3>
     </Segment>
     <div style={{ height: '1000px'}}/>
    </Container>
  </>
)

export default NoMatch