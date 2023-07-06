// Write your React code here.
import {Component} from 'react'
import './index.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
  render() {
    const {emojis, loveEmojiUrl} = resources
    const {name, imageUrl, id} = emojis

    const givingFeedback = () => {
      ;<div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-image-style" />
        <p className="thankyou-text">Thank you!</p>
      </div>
    }

    return (
      <div className="container">
        <div className="card-container">
          <p className="title-style">
            How satisfied are you with our customer support performance?
          </p>
          <div className="emoji-container">
            <ul>
              {emojis.map(eachEmoji => (
                <div className="each-emoji-container">
                  <img
                    src={imageUrl}
                    className="emoji-styling"
                    alt={name}
                    onClick={this.givingFeedback}
                  />
                  <p className="name-style">{name}</p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
