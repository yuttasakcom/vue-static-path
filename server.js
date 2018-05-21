const express = require("express");
const app = express();
const path = require("path");

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(app.get("port"), () => {
  console.log(`Server running at port:${app.get("port")}`);
});
