import { connection } from '../../../config/database';
function insertQuery({ quiz_id: quizId, question, answers, correct_answer: correctAnswer, }) {
    const query = `
    INSERT INTO questions (quiz_id, question, answers, correct_answer)
    VALUES (?, ?, ?, ?)
  `;
    return [query, [quizId, question, JSON.stringify(answers), correctAnswer]];
}
export async function create(params) {
    try {
        const [dataQuery, values] = insertQuery(params);
        const db = connection.promise();
        const result = await db.query(dataQuery, values);
        const { insertId } = result[0];
        return insertId;
    }
    catch (error) {
        console.error('Error executing query:', error);
        throw new Error('Error executing query: ' + error);
    }
}
//# sourceMappingURL=create.js.map