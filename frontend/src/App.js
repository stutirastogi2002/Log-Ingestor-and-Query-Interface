import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    level: "",
    message: "",
    resourceId: "",
    timestamp: "",
    traceId: "",
    spanId: "",
    commit: "",
    parentResourceId: "",
  });
  const [searchResult, setSearchResult] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/ingestfrontend",
        formData
      );
      console.log(response.data);
      setSearchResult(response.data);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };
  return (
    <div>
      <form id="searchForm" className="App">
        <div></div>
        <label for="level">Level:</label>
        <input
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        />

        <label for="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <label for="resourceId">Resource ID:</label>
        <input
          type="text"
          id="resourceId"
          name="resourceId"
          value={formData.resourceId}
          onChange={handleChange}
          required
        />

        <label for="timestamp">Timestamp:</label>
        <input
          type="datetime-local"
          id="timestamp"
          name="timestamp"
          value={formData.timestamp}
          onChange={handleChange}
          required
        />

        <label for="traceId">Trace ID:</label>
        <input
          type="text"
          id="traceId"
          name="traceId"
          value={formData.traceId}
          onChange={handleChange}
          required
        />

        <label for="spanId">Span ID:</label>
        <input
          type="text"
          id="spanId"
          name="spanId"
          value={formData.spanId}
          onChange={handleChange}
          required
        />

        <label for="commit">Commit:</label>
        <input
          type="text"
          id="commit"
          name="commit"
          value={formData.commit}
          onChange={handleChange}
          required
        />

        <label for="parentResourceId">Parent Resource ID:</label>
        <input
          type="text"
          id="parentResourceId"
          name="parentResourceId"
          value={formData.parentResourceId}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
      {searchResult && (
        <div>
          <h2>Search Result</h2>
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
