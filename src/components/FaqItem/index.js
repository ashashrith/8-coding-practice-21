// Write your code here.

import './index.css'

const FaqItem = props => {
  const {list, onClickShowAnswer, showAnswer} = props
  const {questionText, id, answerText} = list

  const showAnswerBtn = () => {
    onClickShowAnswer()
  }

  const btn = showAnswer
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = showAnswer ? 'minus' : 'plus'

  return (
    <li key={id} className="list">
      <div className="cont">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="btn" onClick={showAnswerBtn}>
          <img src={btn} alt={altText} className="img" />
        </button>
      </div>
      {showAnswer && <p className="answer">{answerText}</p>}
    </li>
  )
}

export default FaqItem
