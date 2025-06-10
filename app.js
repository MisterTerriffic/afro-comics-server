require("dotenv").config();
require("./config/connection"); 
require("./config/authStrategy"); 
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("combined"));
app.use(helmet());

const path = require("node:path");
app.use(express.json());
app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded());

const authRoutes = require("./routes/authRoutes");
const comicBookRoutes = require("./routes/comicBookRoutes");
const funkoPopRoutes = require("./routes/funkoPopRoutes");
const graphicNovelRoutes = require("./routes/graphicNovelRoutes");

app.get("/", (request, response, next) => {
  response.status(200).json({ 
    success: { message: "Home Page" },
    statusCode: 200
});
});

app.use("/auth", authRoutes);
app.use("/api/comicbooks", comicBookRoutes);
app.use("/api/funkpops", funkoPopRoutes);
app.use("/api/graphicnovels", graphicNovelRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}.`);
});