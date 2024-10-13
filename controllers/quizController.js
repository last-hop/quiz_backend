const Quiz = require('../models/quizModel');

// Create Quiz
exports.createQuiz = async (req, res) => {
    const { title, questions } = req.body;
    try {
        const quiz = await Quiz.create({ title, questions });
        res.status(201).json(quiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all Quizzes
exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({});
        res.json(quizzes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Quiz Details
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Submit Quiz
exports.submitQuiz = async (req, res) => {
    const { answers } = req.body;
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) score++;
        });

        res.json({ score });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
