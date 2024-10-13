const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: Number, required: true } // index of the correct answer
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [questionSchema]
});

module.exports = mongoose.model('Quiz', quizSchema);
