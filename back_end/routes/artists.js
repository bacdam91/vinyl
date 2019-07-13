const express = require("express");
const route = express.Router();
const Artist = require("../classes/Artist");

route.get("/", async (req, res) => {
	const data = await Artist.find();
	res.send(data);
});

route.post("/", (req, res) => {
	const newArtist = new Artist({
		name: req.body.name,
		band: req.body.band,
		gender: req.body.gender
	});
	newArtist
		.save()
		.then(() => {
			res.send(newArtist);
		})
		.catch(err => {
			res.send("Error: ", err);
		});
});

module.exports = route;
