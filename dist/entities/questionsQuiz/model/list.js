import { connection } from '../../../config/database';
export async function list() {
    try {
        const db = connection.promise();
        const [results] = await db.query('SELECT * FROM questions');
        return results;
    }
    catch (error) {
        console.error('Error executing query:', error);
        throw new Error('Error executing query: ' + error);
    }
}
//# sourceMappingURL=list.js.map