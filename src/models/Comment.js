import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;
let newComment = new Schema({
  name: { type: String, required: true },
  date : { type : String, default: moment().format('YYYY/MM/DD, h:mm A')},
  content: { type: String, required: true },
  contact: { type: String, required: true },
  // article: {type: Schema.Types.ObjectId, ref: 'Article'}

});

module.exports = mongoose.model('Comment', newComment);
