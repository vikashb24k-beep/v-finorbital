export const watchlist = [
  ["INFY", 1555.45, "-1.60%", true], ["ONGC", 116.8, "-0.09%", true],
  ["TCS", 3194.8, "-0.25%", true], ["KPITTECH", 266.45, "3.54%", false],
  ["QUICKHEAL", 308.55, "-0.15%", true], ["WIPRO", 577.75, "0.32%", false],
  ["M&M", 779.8, "-0.01%", true], ["RELIANCE", 2112.4, "1.44%", false],
  ["HUL", 512.4, "1.04%", false],
].map(([name, price, percent, isDown]) => ({ name, price, percent, isDown }));

export const holdings = [
  ["BHARTIARTL", 2, 538.05, 541.15, "+0.58%", "+2.99%"],
  ["HDFCBANK", 2, 1383.4, 1522.35, "+10.04%", "+0.11%"],
  ["HINDUNILVR", 1, 2335.85, 2417.4, "+3.49%", "+0.21%"],
  ["INFY", 1, 1350.5, 1555.45, "+15.18%", "-1.60%", true],
  ["ITC", 5, 202, 207.9, "+2.92%", "+0.80%"],
  ["KPITTECH", 5, 250.3, 266.45, "+6.45%", "+3.54%"],
  ["M&M", 2, 809.9, 779.8, "-3.72%", "-0.01%", true],
  ["RELIANCE", 1, 2193.7, 2112.4, "-3.71%", "+1.44%"],
  ["SBIN", 4, 324.35, 430.2, "+32.63%", "-0.34%", true],
  ["SGBMAY29", 2, 4727, 4719, "-0.17%", "+0.15%"],
  ["TATAPOWER", 5, 104.2, 124.15, "+19.15%", "-0.24%", true],
  ["TCS", 1, 3041.7, 3194.8, "+5.03%", "-0.25%", true],
  ["WIPRO", 4, 489.3, 577.75, "+18.08%", "+0.32%"],
].map(([name, qty, avg, price, net, day, isLoss]) => ({ name, qty, avg, price, net, day, isLoss }));

export const positions = [
  { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, day: "-1.24%", isLoss: true },
  { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, day: "-1.35%", isLoss: true },
];
