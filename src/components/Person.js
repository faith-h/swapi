import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Divider, Grid, Button } from 'semantic-ui-react'
import axios from 'axios'

class Person extends React.Component {
  state = { person: {}, homeworld: '', films: [], vehicles: [], starships: [] }
  
  componentDidMount() {
    axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
      .then( res => {
        this.setState({ person: res.data })
        axios.get(res.data.homeworld)
          .then(res => this.setState({ homeworld: res.data.name })
          )
      })
  }

  // same problem here with converting url for films, starships, and vehicles

  render() {
    const { person, homeworld} = this.state

    return(
      <>

      <Container>

      <Segment inverted style={{ height: '200px', width: '500px', margin: 'auto', top: '20px',  boxShadow: '5px 5px 5px black' }}>
          <h1 style={{ textAlign: 'center', padding: '20px', color: '#ffe135', fontFamily: 'Orbitron' }}> SWAPI </h1>
          <p style={{ textAlign: 'center'}}> An API practice project or an official galactic registry. Give a character a click to find out more. </p>
        </Segment>

        <div style={{ height: '40px'}}/>
          <Segment inverted style={{margin: '10px 10px 10px 10px', padding: '20px', boxShadow: '5px 5px 5px black' }}>

            <Grid columns={3}>
              <Grid.Column>
                <h2 style={{fontFamily: 'Orbitron'}}> {person.name}  </h2> 
                <h2 style={{fontFamily: 'Orbitron'}}> {homeworld} </h2>
              </Grid.Column>

                <Grid.Column>
                  <p> <span style={{ fontWeight: 'bold'}}> Birth Year: </span> {person.birth_year} </p>
                  <p>  <span style={{ fontWeight: 'bold'}}> Hair Color: </span> {person.hair_color} </p>
                  <p> <span style={{ fontWeight: 'bold'}}> Eye Color: </span> {person.eye_color} </p>
                </Grid.Column>

                  <Grid.Column>
                  <p> <span style={{ fontWeight: 'bold'}}> Height: </span> {person.height} </p>
                  <p> <span style={{ fontWeight: 'bold'}}> Mass: </span> {person.mass} </p>
                  <p> <span style={{ fontWeight: 'bold'}}>  Skin color: </span>  {person.skin_color} </p>
                  </Grid.Column>
              </Grid>

          <Divider />

            <Grid columns={3} divided>
              <Grid.Column>
              <p> <span style={{ fontWeight: 'bold'}}> Films: </span> {this.state.person.films} </p>
              <p> <span style={{ fontWeight: 'bold'}}> Vehicles: </span> {this.state.person.vehicles} </p>
              <p> <span style={{ fontWeight: 'bold'}}> Starships: </span> {this.state.person.starships} </p>
              </Grid.Column>
            </Grid>
          </Segment>
          <div style={{ height: '20px'}}/>
            <div
            style={{
            height: '500px',
            width: '170px',
            position: 'relative',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto'
            }}>

            <Link to='/'>
              <Button color='black' fluid style = {{ fontFamily: 'Orbitron', boxShadow: '3px 3px black' }}>
                Back
              </Button>
            </Link>
          </div>
      </Container>
      </>
    )
  }
}

export default Person