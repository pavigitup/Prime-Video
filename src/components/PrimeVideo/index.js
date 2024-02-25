import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actionMovies: [],
      comedyMovies: [],
    }
  }

  componentDidMount() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      movie => movie.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      movie => movie.categoryId === 'COMEDY',
    )

    this.setState({
      actionMovies,
      comedyMovies,
    })
  }

  render() {
    const {actionMovies, comedyMovies} = this.state

    return (
      <div className="bg-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video"
        />
        <div className="movies-con">
          <div className="con">
            <h1>Action Movies</h1>
            <MoviesSlider primeActionMovies={actionMovies} />
          </div>
          <div className="con">
            <h1>Comedy Movies</h1>
            <MoviesSlider primeComedyMovies={comedyMovies} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
