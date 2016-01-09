var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  text: {
    type: String,
    required: true
  },

  salary: {
    type: Number
  },

  author: {
    type: String
  },

  category: {
    type: String
  }

  // readd when functionality is added back in
  // author: {type: Schema.Types.ObjectId, ref: 'user'},

  // categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
},
{
  timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('post', PostSchema);
