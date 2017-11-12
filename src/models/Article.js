import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;
let newArticle = new Schema({
  author: { type: String, required: true },
  date : { type : String, default: moment().format('YYYY/MM/DD, h:mm A')},
  // updated: { type: Date, default: moment().startOf('day').fromNow() },
  title: { type: String, required: true },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}] // ref se réfère à la collection

});

module.exports = mongoose.model('Article', newArticle);
