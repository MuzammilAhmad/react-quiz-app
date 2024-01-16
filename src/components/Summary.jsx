import img from "../assets/quiz-complete.png"
import QUESTION from "../questions.js";

export default function Summary({userAnswers}){
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTION[index].answers[0]);

    const skippedAnswersShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );

    const correctAnswersShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );

    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return <div id="summary">
           <h2>Quiz Completed</h2>
            <img src={img} alt="Summary"/>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <span className="text"> Answer Skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <span className="text">Answered Correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <span className="text">Answered Incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index)=>{
                    let cssClass = "user-answer";

                    if(answer === null){
                        cssClass += " skipped"
                    } else if(answer === QUESTION[index].answers[0]) {
                        cssClass += " correct"
                    }else{
                        cssClass += " wrong"
                    }

                    return(
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTION[index].text}</p>
                            <p className={cssClass}>{answer ?? "skipped"}</p>

                        </li>
                    );

                })}
            </ol>
    </div>
}