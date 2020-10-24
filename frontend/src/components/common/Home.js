import React from 'react'
import MoviesCard from '../movies/MoviesCard'

class Home extends React.Component {

  state = {
    movies: []
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/movies')
      const movies = await response.json()
      console.log(movies)
      this.setState({ movies })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if ( !this.state.movies ) return null
    console.log(this.state)
    return (
      <div>
        <div className="hero is-dark is-fullheight">
          <div className="hero-body">
            <div className="container">
              <p className="title">
          Featured Movie
              </p>
            </div>
          </div>
          <div className="main-page">
            <h1>ACTION MOVIES</h1>
            { this.state.movies.map(movie => (
              <MoviesCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
