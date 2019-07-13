const mongoose = require("mongoose");
const config = require("config");

class DBHelper {
	connectToDB(db) {
		mongoose
			.connect(
				`mongodb+srv://${config.get(
					"dbConnection.dbUsername"
				)}:${config.get(
					"dbConnection.dbPassword"
				)}@studybox-mjczc.mongodb.net/${db}?retryWrites=true&w=majority`,
				{ useNewUrlParser: true }
			)
			.then(() => {
				console.log("Connected to MongoDB...");
			})
			.catch(err => {
				console.log("Error: ", err);
			});
	}
}

module.exports = DBHelper;
