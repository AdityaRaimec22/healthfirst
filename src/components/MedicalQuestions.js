import React, { useState } from 'react';
import './Advantage.css';

export default function MedicalQuestions() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    // Add more questions as needed
  });

  const handleAnswerChange = (event, questionId) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission or validation here
  };

  const questionList = [
    'Do you have any pre-existing medical conditions?',
    'Have you undergone any surgeries in the last 5 years?',
    'Are you currently taking any medications? If yes, please specify.',
    'Have you ever been diagnosed with a chronic illness?',
    'Do you smoke or use tobacco products?',
    // Add more questions as needed
  ];

  return (
    <div className="container">
      <h1 className="mb-3">Medical Questions</h1>
      <form onSubmit={handleSubmit}>
        {questionList.map((question, index) => (
          <div className="mb-3" key={index}>
            <label htmlFor={`question${index + 1}`} className="form-label">
              {question}
            </label>
            <input
              type="text"
              className="form-control"
              id={`question${index + 1}`}
              value={answers[`question${index + 1}`]}
              onChange={(event) => handleAnswerChange(event, `question${index + 1}`)}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-dark mt-3">
          Submit Answers
        </button>
      </form>
    </div>
  );
}
