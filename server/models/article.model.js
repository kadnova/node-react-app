import mongoose from 'mongoose';

//define schema
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    url: {type: String, required: true},
    original_paragraph: {type: String, required: true},
    user_suggestion: {type: String, required: true},
    is_approved: {type: Boolean, required: true, default: false},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
}, {
  retainKeyOrder: true
});

// on every save, add the date
modelSchema.pre('save', function(next) {
    // get the current date
    let currentDate = new Date();

    // change the updated_at field to current date
    this.updated_at = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.created_at)
        this.created_at = currentDate;

    next();
});

//create model
let articleModel = mongoose.model('Article', modelSchema);

module.exports = articleModel;
