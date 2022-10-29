import React from 'react'
import { useState } from 'react';
import './quizstyle.css'
var resp = window.prompt("Enter Your Name")
console.log(resp);
document.getElementById("myText").innerText = resp;
const QuizComp = () => {
    var Questionbank = [
        {
            Question: "What is the capital of India?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Ranchi", isCorrect: false },
                { Answer: "Patna", isCorrect: false }
            ]
        },
        {
            Question: "Who is the PM of India?",
            Answers: [
                { Answer: "Amit Shah", isCorrect: false },
                { Answer: "Modi", isCorrect: true },
                { Answer: "Raga", isCorrect: false },
                { Answer: "Kejri", isCorrect: false }
            ]
        }, {
            Question: "2 +3 = ?",
            Answers: [
                { Answer: "5", isCorrect: true },
                { Answer: "7", isCorrect: false },
                { Answer: "4", isCorrect: false },
                { Answer: "3", isCorrect: false }
            ]
        },
        {
            Question: "What comes after january?",
            Answers: [
                { Answer: "feb", isCorrect: true },
                { Answer: "march", isCorrect: false },
                { Answer: "june", isCorrect: false },
                { Answer: "sept", isCorrect: false }
            ]
        },
        {
            Question: "81/9=?",
            Answers: [
                { Answer: "7", isCorrect: false },
                { Answer: "8", isCorrect: false },
                { Answer: "9", isCorrect: true },
                { Answer: "10", isCorrect: false }
            ]
        },
         {
            Question: "What comes after march?",
            Answers: [
                { Answer: "feb", isCorrect: false },
                { Answer: "march", isCorrect: false },
                { Answer: "April", isCorrect: true },
                { Answer: "sept", isCorrect: false }
            ]
        },
          {
            Question: "What comes after feb?",
            Answers: [
                { Answer: "feb", isCorrect: false },
                { Answer: "march", isCorrect: true },
                { Answer: "june", isCorrect: false },
                { Answer: "sept", isCorrect: false }
            ]
        },
           {
            Question: "8-0=?",
            Answers: [
                { Answer: "8", isCorrect: true },
                { Answer: "7", isCorrect: false },
                { Answer: "9", isCorrect: false },
                { Answer: "10", isCorrect: false }
            ]
        },
            {
            Question: "What comes after oct?",
            Answers: [
                { Answer: "feb", isCorrect: false },
                { Answer: "march", isCorrect: false },
                { Answer: "june", isCorrect: false },
                { Answer: "nov", isCorrect: true }
            ]
        },
             {
            Question: "logbase2(8)=?",
            Answers: [
                { Answer: "3", isCorrect: true },
                { Answer: "2", isCorrect: false },
                { Answer: "1", isCorrect: false },
                { Answer: "0", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Try Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;