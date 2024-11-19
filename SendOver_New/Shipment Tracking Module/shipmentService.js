const shipments = [
    { serialNumber: "12345", status: "In transit" },
    { serialNumber: "67890", status: "Delivered" },
  ];
  
  exports.trackShipment = async (serialNumber) => {
    const shipment = shipments.find((s) => s.serialNumber === serialNumber);
    return shipment ? shipment.status : "Package not found.";
  };
  