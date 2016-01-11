var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BidSchema = new Schema({
  price: {
    type: String
  },

  description: {
    type: String
  },

  author: {type: Schema.Types.ObjectId, ref: 'user'},

  job: {type: Schema.Types.ObjectId, ref: 'post'}
},
{
  timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('bid', BidSchema);
