const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Genders = Object.freeze({
	male: "male",
	female: "female",
	other: "other"
});

const ArtistSchema = new Schema({
	name: { type: String, require: true },
	band: { type: String, required: true },
	gender: { type: String, enum: Object.values(Genders) }
});

const Artist = mongoose.model("artist", ArtistSchema);

module.exports = Artist;
