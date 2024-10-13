const express = require('express');
const { createQuiz, getAllQuizzes, getQuizById, submitQuiz } = require('../controllers/quizController')
const router = express.Router();

router.post('/', createQuiz);
router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/:id/submit', submitQuiz);

module.exports = router;
