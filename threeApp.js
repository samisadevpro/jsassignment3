import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Get the current directory path in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to parse JSON request bodies
app.use(express.json());

// Path to the JSON file
const filePath = path.join(__dirname, "data", "data.json");

// Read and parse data from the JSON file
const readData = () => {
  const rawData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(rawData);
};

// Write updated data back to the JSON file
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// 1. Create a new product (POST)
app.post("/product", (req, res) => {
  const newProduct = req.body;
  const products = readData();

  // Generate a new ID by adding 1 to the highest ID in the current products
  const newId = products.length ? Math.max(products.map((p) => p.id)) + 1 : 1;
  newProduct.id = newId;

  products.push(newProduct);
  writeData(products);

  res.status(201).json(newProduct);
});

// 2. Update an existing product (PUT)
app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const products = readData();

  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products[productIndex] = { id: parseInt(id), ...updatedProduct };
  writeData(products);

  res.status(200).json(products[productIndex]);
});

// 3. Delete a product (DELETE)
app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  const products = readData();

  const productIndex = products.findIndex((p) => p.id === parseInt(id));
  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1);
  writeData(products);

  res.status(200).json({
    message: `Product with id ${id} deleted`,
    deletedProduct: deletedProduct[0],
  });
});

// 4. Fetch all products (GET)
app.get("/product", (req, res) => {
  const products = readData();
  res.status(200).json(products);
});

// Home route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Group 20 - CRUD API</title>
      </head>
      <body>
        <h1>Welcome to the CRUD API for Products</h1>
        <p>Use the following endpoints:</p>
        <ul>
          <li><b>GET /product</b> - Get all products</li>
          <li><b>POST /product</b> - Add a new product</li>
          <li><b>PUT /product/:id</b> - Update an existing product</li>
          <li><b>DELETE /product/:id</b> - Delete a product</li>
        </ul>
      </body>
    </html>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
