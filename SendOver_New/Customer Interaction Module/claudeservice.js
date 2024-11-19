const axios = require("axios");

exports.handleMessage = async (message) => {
  const CLAUDE_API = "https://api.anthropic.com/v1/complete";
  try {
    const response = await axios.post(
      CLAUDE_API,
      {
        prompt: `Respond as a shipping assistant: ${message}`,
        model: "claude-instant",
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CLAUDE_API_KEY}`,
        },
      }
    );

    return response.data.completion.trim();
  } catch (error) {
    console.error("Claude API Error:", error.message);
    return "Sorry, I couldn’t process your request. Please try again later.";
  }
};
