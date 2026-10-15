
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("V-FinOrbital backend is running!");
});

// // Add holdings
// app.get("/addHoldings", async (req, res) => {
//   const tempHoldings = [
//     { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
//     { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//     { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//     { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//     { name: "ITC", qty: 5, avg: 202, price: 207.9, net: "+2.92%", day: "+0.80%" },
//     { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//     { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
//     { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//     { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
//     { name: "SGBMAY29", qty: 2, avg: 4727, price: 4719, net: "-0.17%", day: "+0.15%" },
//     { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//     { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
//     { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//   ];

//   try {
//     // Update existing records or insert missing records
//     for (const item of tempHoldings) {
//       await HoldingsModel.updateOne(
//         { name: item.name },
//         { $set: item },
//         { upsert: true, runValidators: true }
//       );
//     }

//     const holdings = await HoldingsModel.find({});

//     res.status(200).json({
//       message: "Holdings saved successfully!",
//       count: holdings.length,
//       data: holdings,
//     });
//   } catch (err) {
//     console.error("Holdings error:", err);
//     res.status(500).json({
//       message: "Failed to save holdings",
//       error: err.message,
//     });
//   }
// });

// // Add positions
// app.get("/addPositions", async (req, res) => {
//   const tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   try {
//     for (const item of tempPositions) {
//       await PositionsModel.updateOne(
//         { name: item.name, product: item.product },
//         { $set: item },
//         { upsert: true, runValidators: true }
//       );
//     }

//     const positions = await PositionsModel.find({});

//     res.status(200).json({
//       message: "Positions saved successfully!",
//       count: positions.length,
//       data: positions,
//     });
//   } catch (err) {
//     console.error("Positions error:", err);
//     res.status(500).json({
//       message: "Failed to save positions",
//       error: err.message,
//     });
//   }
// });




// Fetch holdings



// Fetch holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.status(200).json(holdings);
  } catch (err) {
    console.error("Fetch holdings error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Fetch positions
app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.status(200).json(positions);
  } catch (err) {
    console.error("Fetch positions error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Create new order
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || qty == null || price == null || !mode) {
      return res.status(400).json({
        message: "name, qty, price, and mode are required",
      });
    }

    const newOrder = new OrdersModel({ name, qty, price, mode });
    const savedOrder = await newOrder.save();

    res.status(201).json({
      message: "Order saved successfully!",
      data: savedOrder,
    });
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({
      message: "Failed to save order",
      error: err.message,
    });
  }
});

// Start server only after MongoDB connects
async function startServer() {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URL is missing from your .env file");
    }

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully!");
    console.log("Database:", mongoose.connection.name);
    console.log("Holdings collection:", HoldingsModel.collection.name);
    console.log("Positions collection:", PositionsModel.collection.name);

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Startup error:", err.message);
    process.exit(1);
  }
}

startServer();
