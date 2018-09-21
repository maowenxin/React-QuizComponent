import React, {Component} from 'react'

let quizData=require('./quiz_data.json')

class Quiz extends Component {
constructor(){
    super();
    this.state ={quiz_position:1}
}
    render(){
       return <div>Quiz
        <div className='QuizQuestion'>

            {quizData.quiz_questions[this.state.quiz_position].instruction_text}
        </div>

        </div>
    }
}

export default Quiz;