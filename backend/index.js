const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const path = require("path");
const authRequired = require("./Middlewares/AuthRequired");
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();
const axios = require("axios");

const {HoldingModel} = require("./model/HoldingModel");
const { PositionModel } = require('./model/PositionModel');
const { OrderModel } = require('./model/OrderModel');

require('dotenv').config();

app.use(
  cors({
    origin: [
      "https://zerodha-clone-silk-eta.vercel.app",
      "https://zerodhaclone-liart.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 3002;
const mongoUri = process.env.MONGO_URI;

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
    try {
        const allHoldings = await HoldingModel.find({});
        res.json(allHoldings);
    } catch (err) {
        console.error("GET /allHoldings error:", err);
        res.status(500).json({ error: "Failed to fetch holdings" });
    }
});



app.get("/allPositions", async (req, res) => {
    try {
        const allPositions = await PositionModel.find({});
        res.json(allPositions);
    } catch (err) {
        console.error("GET /allPositions error:", err);
        res.status(500).json({ error: "Failed to fetch positions" });
    }
});

// app.get("/stockPrice/:symbol", async (req, res) => {
//     try {
//         const symbol = req.params.symbol;

//         const quote = await yahooFinance.quote(`${symbol}.NS`);

//         res.json({
//             symbol,
//             price: quote.regularMarketPrice,
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             error: "Failed to fetch stock price",
//         });
//     }
// });


app.get("/stockPrice/:symbol", async (req, res) => {
  try {
    console.log("API KEY:", process.env.ALPHA_VANTAGE_API_KEY);

    const symbol = req.params.symbol;

    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.BSE&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );

    console.log("ALPHA RESPONSE:", response.data);

    const quote = response.data["Global Quote"];

    if (!quote || !quote["05. price"]) {
      return res.status(404).json({
        error: "Stock not found",
        response: response.data,
      });
    }

    res.json({
      symbol,
      price: Number(quote["05. price"]),
    });
  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);

    res.status(500).json({
      error: "Failed to fetch stock price",
      details: err.response?.data || err.message,
    });
  }
});

// app.get("/stockPrice/:symbol", async (req, res) => {
//   try {
//     const symbol = req.params.symbol;

//     const response = await axios.get(
//       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.BSE&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
//     );

//     const quote = response.data["Global Quote"];

//     if (!quote || !quote["05. price"]) {
//       return res.status(404).json({
//         error: "Stock not found",
//       });
//     }

//     res.json({
//       symbol,
//       price: Number(quote["05. price"]),
//     });
//   } catch (err) {
//     console.error(err);

//     res.status(500).json({
//       error: "Failed to fetch stock price",
//     });
//   }
// });


// app.get("/stockPrice/:symbol", async (req, res) => {
//   try {
//     const symbol = req.params.symbol;

//     const response = await axios.get(
//       `https://api.twelvedata.com/price?symbol=${symbol}&exchange=NSE&apikey=${process.env.TWELVEDATA_API_KEY}`
//     );

//     console.log(response.data);

//     res.json(response.data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: err.message,
//     });
//   }
// });


// app.get("/stockPrice/:symbol", async (req, res) => {
//   try {
//     let symbol = req.params.symbol;

//     const symbolMap = {
//       "M&M": "M&M",
//     };

//     symbol = symbolMap[symbol] || symbol;

//     const response = await axios.get(
//       `https://api.twelvedata.com/price?symbol=${symbol}&exchange=NSE&apikey=${process.env.TWELVEDATA_API_KEY}`
//     );

//     if (response.data.status === "error") {
//       return res.status(400).json({
//         error: response.data.message,
//       });
//     }

//     res.json({
//       symbol,
//       price: Number(response.data.price),
//     });
//   } catch (err) {
//     console.error(err);

//     res.status(500).json({
//       error: "Failed to fetch stock price",
//     });
//   }
// });

app.post("/newOrder",authRequired,async(req,res)=>{
    try {
        const { name, qty, price, mode } = req.body ?? {};

        const parsedQty = Number(qty);
        const parsedPrice = Number(price);

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: 'name is required (string)' });
        }
        if (!Number.isFinite(parsedQty)) {
            return res.status(400).json({ error: 'qty must be a number' });
        }
        if (!Number.isFinite(parsedPrice)) {
            return res.status(400).json({ error: 'price must be a number' });
        }
        if (!mode || typeof mode !== 'string') {
            return res.status(400).json({ error: 'mode is required (string)' });
        }

        const newOrder = await OrderModel.create({
            userId:req.user.id,
            name,
            qty: parsedQty,
            price: parsedPrice,
            mode,
        });

        let holding = await HoldingModel.findOne({
            userId:req.user.id,
            name:name,
        });
        if(holding){
            holding.qty += parsedQty;
            holding.avg =((holding.avg * (holding.qty - parsedQty))+(parsedPrice * parsedQty))/holding.qty;
            await holding.save();
        }
        else{
            await HoldingModel.create({
                userId:req.user.id,
                name,
                qty:parsedQty,
                avg:parsedPrice,
                price:parsedPrice,
            });
        }
        let position = await PositionModel.findOne({
            userId:req.user.id,
            name:name,
        });
        if(position){
            position.qty += parsedQty;
            position.avg =((position.avg * (position.qty - parsedQty))+(parsedPrice * parsedQty))/position.qty;
            await position.save();
        }
        else{
            await PositionModel.create({
                userId:req.user.id,
                product:"CNC",
                name,
                qty:parsedQty,
                avg:parsedPrice,
                price:parsedPrice,
            });
        }

        return res.status(201).json({ message: 'Order saved', order: newOrder });
    } catch (err) {
        console.error('POST /newOrder error:', err);
        return res.status(500).json({ error: 'Failed to create order' });
    }
});

app.get("/test", (req, res) => {
  res.send("Backend working");
});

app.post("/sellOrder",authRequired,async(req,res)=>{
    try {
        const { name, qty, price, mode } = req.body ?? {};

        const parsedQty = Number(qty);
        const parsedPrice = Number(price);

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ error: 'name is required (string)' });
        }
        if (!Number.isFinite(parsedQty) || parsedQty<=0) {
            return res.status(400).json({ error: 'qty must be a positive number' });
        }
        if (!Number.isFinite(parsedPrice) || parsedQty<=0) {
            return res.status(400).json({ error: 'price must be a positive number' });
        }
        if (!mode || typeof mode !== 'string') {
            return res.status(400).json({ error: 'mode is required (string)' });
        }
        const holding = await HoldingModel.findOne({
            userId: req.user.id,
            name,
        });
        if(!holding){
        return res.status(404).json({
                error:"Holding not found"
            });
        }
            if(holding.qty < parsedQty){
            return res.status(400).json({
                error:"Insufficient quantity"
            });
        }
        holding.qty -= parsedQty;
        if(holding.qty === 0){
            await HoldingModel.deleteOne({
                _id: holding._id
            });
        }
        else{
            await holding.save();
        }

        const newsellOrder = await OrderModel.create({
            userId:req.user.id,
            name,
            qty: parsedQty,
            price: parsedPrice,
            mode,
        });
        const position = await PositionModel.findOne({
            userId: req.user.id,
            name,
        });
        if(position){
            position.qty -= parsedQty;

            if(position.qty <= 0){
                await PositionModel.deleteOne({
                    _id: position._id
                });
            }
            else{
                await position.save();
            }
        }

        return res.status(201).json({ message: 'Order saved', order: newsellOrder });
    } catch (err) {
        console.error('POST /sellOrder error:', err);
        return res.status(500).json({ error: 'Failed to create order' });
    }
});


app.get("/orders",authRequired,async (req,res)=>{
    try{
        const orders = await OrderModel.find({
            userId : req.user.id,
        });
        res.status(200).json(orders);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
        error: "Failed to fetch orders",
    });
}
});

app.get("/holdings",authRequired,async (req,res)=>{
    try{
        const holdings = await HoldingModel.find({
            userId : req.user.id,
        });
        res.status(200).json(holdings);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
        error: "Failed to fetch holdings",
    });
}
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

app.get("/positions",authRequired,async (req,res)=>{
    try{
        const positions = await PositionModel.find({
            userId : req.user.id,
        });
        res.status(200).json(positions);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
        error: "Failed to fetch positions",
    });
}
});

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});


// app.get("/addPositions",(req,res)=>{
//     let tempo = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];
//     tempo.forEach((item)=>{
//         let newPosition = new PositionModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     });
//     res.send("Done!!");
// });

// app.get("/addHoldings",(req,res)=>{
//     let temp = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];
//     temp.forEach((item)=>{
//         let newHolding = new HoldingModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();
//     });
//     res.send("DOne!")
// });



async function start() {
    if (!mongoUri) {
        console.error('Missing MONGO_URI in environment (.env).');
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected');

        app.listen(port, () => {
            console.log('App is listening on port ' + port);
        });
    } catch (err) {
        console.error('MongoDB connection error:', err?.message || err);
        process.exit(1);
    }
}

app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/*", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "../frontend/build/index.html")
//   );
// });

app.use((req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html")
  );
});

start();
