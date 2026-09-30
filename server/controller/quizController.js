const Question = require("../models/questionsModels");



async function submitQuiz(req, res) {
  try {
    const { answers } = req.body;

    if (!answers || answers.length === 0) {
      return res.status(400).json({
        success: false,
        msg: "No answers submitted"
      });
    }

    let correct = 0;
    let wrong = 0;

    for (const userAnswer of answers) {

      const question = await Question.findById(
        userAnswer.questionId
      );

      if (!question) {
        continue;
      }

      if (question.correctAnswer === userAnswer.answer) {
        correct++;
      } else {
        wrong++;
      }
    }

    const total = answers.length;

    const percentage = Math.round(
      (correct / total) * 100
    );

    return res.status(200).json({
      success: true,
      msg: "Quiz submitted successfully",

      result: {
        totalQuestions: total,
        correctAnswers: correct,
        wrongAnswers: wrong,
        percentage: percentage
      }
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      msg: "Internal Server Error"
    });
  }
}

module.exports = {
  submitQuiz
};