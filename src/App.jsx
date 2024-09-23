import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [difficulty, setDifficulty] = useState("easy");

  const handleQueryInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleNumQuestionsInputChange = (e) => {
    setNumQuestions(e.target.value);
  };
  const handleDifficultyInputChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <div className="main-container">
      <h1>AI Question Generator</h1>
      <div className="form-container">
        <div>
          <label>Enter Query:</label>
          <input
            type="text"
            value={query}
            onChange={handleQueryInputChange}
            required
            placeholder="Enter a topic, subject or query..."
            className="query-input"
          />
        </div>

        <div>
          <label>Number of Questions: {numQuestions}</label>
          <input
            type="range"
            value={numQuestions}
            onChange={handleNumQuestionsInputChange}
            min="1"
            max="10"
            required
            className="no-of-questions-input"
          />
        </div>

        <div>
          <label>Select Difficulty:</label>
          <select
            value={difficulty}
            onChange={handleDifficultyInputChange}
            required
            className="difficulty-input"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <button type="submit" className="submit-button">
            Generate Questions
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
