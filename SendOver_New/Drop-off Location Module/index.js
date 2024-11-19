const express = require("express");

const app = express();
app.use(express.json());

app.post("/suggest-locations", (req, res) => {
  const { address } = req.body;

  // Example logic to suggest locations
  const locations = [
    { name: "Lagos Office", distance: "10km" },
    { name: "Abuja Office", distance: "50km" },
  ];

  res.json(locations);
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Drop-off location module running on ${PORT}`));
