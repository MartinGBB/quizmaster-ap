import express from 'express';
import { router as login } from '../entities/users/controller/router';
import { router as questions } from '../entities/questionsQuiz/controller/router';
import { router as quiz } from '../entities/quiz/controller/router';
export const root = express.Router({ mergeParams: true });
root.use('/user', login);
root.use('/quiz', quiz);
root.use('/questions', questions);
//# sourceMappingURL=routes.js.map