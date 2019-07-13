const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const artists = require("./back_end/routes/artists");

const DBHelper = require("./back_end/classes/DBHelper");
const dbHelper = new DBHelper();

app.use(express.json());
app.use("/api/artists", artists);

dbHelper.connectToDB("vinyl");

app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Listening on port ${PORT}...`);
});
