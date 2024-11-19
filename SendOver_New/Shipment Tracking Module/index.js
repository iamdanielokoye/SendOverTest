const express = require("express");
const { trackShipment } = require("./shipmentService");

const app = express();
app.use(express.json());

// Track shipment endpoint
app.post("/track", async (req, res) => {
  const { serialNumber } = req.body;

  const shipmentStatus = await trackShipment(serialNumber);
  res.json({ status: shipmentStatus });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Shipment tracking module running on ${PORT}`));
