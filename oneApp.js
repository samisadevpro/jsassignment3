// using "MJS" => ES module
import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  //custom html and css
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
                p {
                    font-size: 1.2rem;
                    color: #666;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                
                    }

                    h4{
                        letter-spacing:2px;
                        text-shadow:-2px -2px 3px orangeRed;
                    }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Group 20</h1>
                    <h4>Members: </h4>
                <ul>
                    <li>Samartha Rawal</li>
                    <li>Prakriti Karki</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); //concatenation
});
