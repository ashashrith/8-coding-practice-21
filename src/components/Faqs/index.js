// Write your code here.

import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {showAnswer: false}

  displayList = () => {
    const {faqsList} = this.props

    return faqsList
  }

  onClickShowAnswer = () => {
    this.setState(prevState => ({showAnswer: !prevState.showAnswer}))
  }

  render() {
    const {showAnswer} = this.state
    const finalList = this.displayList()

    return (
      <div className="bg-container">
        <ul className="list-container">
          <h1 className="heading">FAQs</h1>
          {finalList.map(each => (
            <FaqItem
              list={each}
              key={each.id}
              onClickShowAnswer={this.onClickShowAnswer}
              showAnswer={showAnswer}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
