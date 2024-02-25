import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = ({primeActionMovies, primeComedyMovies}) => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: index => {
      console.log(`Slider Changed to: ${index + 1}`)
    },
  }

  return (
    <div>
      <ul>
        <Slider {...settings}>
          {primeActionMovies &&
            primeActionMovies.map(each => (
              <MovieItem item={each} key={`action-${each.categoryId}`} />
            ))}
        </Slider>
      </ul>
      <ul>
        <Slider {...settings}>
          {primeComedyMovies &&
            primeComedyMovies.map(each => (
              <MovieItem item={each} key={`action-${each.categoryId}`} />
            ))}
        </Slider>
      </ul>
    </div>
  )
}

export default MoviesSlider
