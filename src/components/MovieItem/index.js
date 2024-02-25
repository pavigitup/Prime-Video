import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  console.log(item)

  return (
    <div>
      <Popup
        trigger={
          <button className="button" type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnailUrl" />
          </button>
        }
        modal
      >
        {close => (
          <div className="modal">
            <button
              className="close"
              type="button"
              onClick={close}
              data-testid="closeButton"
            >
              <IoMdClose />.
            </button>
            <div className="content">
              <ReactPlayer url={videoUrl} width="600px" />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
