import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AISuggestions = ({ gener}) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = async () => {
    setLoading(true);

    const genAI = new GoogleGenerativeAI("AIzaSyAZtOMrCiNhtIPJRtAYJJrJihl7knfkkFY");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Suggest 3 popular books in the '${gener}' gener. Return only JSON format with title and author. No extra text.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      const match = text.match(/\{[\s\S]*?\}/);
      if (!match) throw new Error("No valid JSON found in AI response");

      const jsonText = match[0];
      const data = JSON.parse(jsonText);

      const suggestions = Array.isArray(data)
        ? data
        : Object.values(data); 

      setRecommendations(suggestions);
    } catch (error) {
      console.error("Failed to fetch AI suggestions:", error);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (gener) {
      fetchRecommendations();
    }
  }, [gener]);

  console.log("recommendations", recommendations);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>AI Suggested Books (Gener: {gener})</h3>
      {loading ? (
        <p>Loading recommendations...</p>
      ) : recommendations.length ? (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {recommendations.map((book, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
                width: "200px",
              }}
            >
              <h4>{book}</h4>
            </div>
          ))}
        </div>
      ) : (
        <p>No suggestions found.</p>
      )}
    </div>
  );
};

export default AISuggestions;
