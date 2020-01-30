import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, Segment, Button } from 'semantic-ui-react'

class People extends React.Component {
  state = { people: [], planets: [], next: '', previous: '', nextPlan: '', prevPlan: ''}

  // planets remains empty for now, may need it to convert string of p.homeworld to homeworld name

  componentDidMount() {
    axios.get(`https://swapi.co/api/people`)
    .then( res => {
      this.setState({ people: res.data.results,
        next: res.data.next,
        previous: res.data.previous })
    })
      .catch( err => {
        console.log( err.response )
      })
    axios.get(`https://swapi.co/api/planets`)
    .then( res => {
      this.setState({ planets: res.data.results,
      nextPlan: res.data.next,
      prevPlan: res.data.previous })

    })
      .catch( err => {
        console.log( err.response )
      })
  }

  getMorePeople = (more) => {
    axios.get(more)
      .then(res => {
        this.setState({
          people: res.data.results,
          next: res.data.next,
          previous: res.data.previous
        })
      })
      console.log(this.state.people)
  }

//   getMorePlanets = (more) => {
//     axios.get(more)
//     .then(res => {
//       this.setState({ planets: res.data.results,
//       nextPlan: res.data.next,
//       prevPlan: res.data.previous })
//     })
// }  

// getPlanetNames() {
//   return this.state.people.map( p => (
//     axios.get(p.homeworld)
//     .then( res => {
//       console.log(res)
//     })
//   ))
// }
// need res.data.name for homeworld name, then to set p.homeworld to name
// possibility to use this function to extract planet name or this.state.planets.indexof() - nothing seems to return right though

  renderPeople() {
    return this.state.people.map( p => (
      <>
        <Link key={p.url} to={p.url.slice(20)}> 
          <Segment inverted style={{margin: '10px 10px 20px 10px', boxShadow: '5px 6px black' }}>
            <p style={{ fontWeight: 'bold' }}> {p.name} </p>
            <p> { p.homeworld } </p>
            {/* <p> { this.state.planets.indexOf(p.homeworld.slice(29, -1)) } </p> */}
          </Segment>
        </Link>
        </>
    ))
  }

  render() {

    return(
      <>
      <Container>
        <div style={{ height: '40px'}}/>
          { this.renderPeople() }

        <div style={{ height: '100px', width: '170px', position: 'relative', top: '0', bottom: '0', left: '0', right: '0', margin: 'auto' }}>
          <Button
            style = {{ fontFamily: 'Orbitron', boxShadow: '3px 3px black'  }}
            color='black'
            onClick={() => this.getMorePeople(this.state.previous)}
          >
            Back
          </Button>

          <Button
            style = {{ fontFamily: 'Orbitron', boxShadow: '3px 3px black'  }}
            color='black'
            onClick={() => this.getMorePeople(this.state.next)}
          >
            Next
          </Button>

          </div>
       </Container>
      </>
    )
  }
}

export default People