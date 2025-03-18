import express from "express";

// https://github.com/anmarjarjees/js-frameworks/blob/main/week09/index1.js
// here got to know newer version of node.js requires with instead of assert was getting error before
import data from "./data/data.json" with { type: "json" };

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Group 20</title>
            <style>
                body {
                    margin:0;
                    padding:0;
                    box-sizing: border-box;
                    height:100vh;
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    display:grid;
                    place-items:center;
                }
                h1 {
                    color: #333;
                    font-size: 2.5rem;
                }
                  </style>
        </head>
        <body>
           <h1>Getting info from url</h1>
            </div>
        </body>
        </html>
    
    
    `);
});

app.get("/product", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
