import { connection } from '../../../config/database';
function insertQuery({ title, description, number_of_questions: numberOfQuestions, }) {
    const query = `
    INSERT INTO quizzes (title, description, number_of_questions)
    VALUES (?, ?, ?)
  `;
    return [query, [title, description, numberOfQuestions]];
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