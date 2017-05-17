var mongoose = require('mongoose');// no-sQl database

// Doc for Mongoose Schemas: def of dataset, 
var Schema = mongoose.Schema;
// relations and entities
var pizzaSchema = new Schema(
	{
		price: {
			type: Number, require: true
		},
		menu: {
			type: String, require: true
		}
		// igragate your data: size, dough
	},
	{
		collection: 'pizzas'
	}	
);

mongoose.connect('mongodb://localhost/pizzasdb');
// Doc for Monggose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('Pizza', pizzaSchema);