import React, { useEffect } from "react";

function QuestionData() {
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const storedData = localStorage.getItem("questions");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setQuestions(parsedData.results);
        console.log(parsedData.results);
        const correctAnswers = parsedData.results.map(
          (item) => item.correct_answer
        );
        console.log(correctAnswers);
        const incorrectAnswers = parsedData.results.map(
          (item) => item.incorrect_answers
        );
        console.log(incorrectAnswers);
        const allAnswers = parsedData.results.map((item) => [
          item.correct_answer,
          ...item.incorrect_answers,
        ]);
        setAnswers(allAnswers);
        console.log(allAnswers);
        return;
      } else {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
        );
        const data = await response.json();
        localStorage.setItem("questions", JSON.stringify(data));
        console.log(data)
        setQuestions(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <form action="" method="get">
        {questions.map((item, questionIndex) => {
          return (
            <div key={questionIndex}>
              <h3>{questionIndex + 1} <span></span> {item.question}</h3>
              <div>

              <ul>
                {answers[questionIndex].map((answer, answerIndex) => {
                    return (
                        <div>

                    <li key={answerIndex} style={{ listStyleType: "none" }}>
                      <input
                        type="radio"
                        name={`question${questionIndex}`}
                        id={`answer${questionIndex}_${answerIndex}`}
                        value={answer}
                        />
                      <label htmlFor={`answer${questionIndex}_${answerIndex}`}>{answer}</label>
                    </li>
                        </div>
                  );
                })}
              </ul>
                </div>
            </div>
          );
        })}
      </form>
        <button type="submit">Submit</button>
    </div>
  );
}

export default QuestionData;
