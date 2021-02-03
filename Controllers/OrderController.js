const pool = require('../dbconfig');

module.exports = {
    newOrder: async(req, res) => {
        const {price, date, user_id} = req.body;

        try {
            const answerDB = await pool.query('INSERT INTO orders (price, date, user_id) VALUES ( $1, $2, $3)', [price, date, user_id]);
            res.json({
                message: "New user with the following values:" + [price, date, user_id],
                code: 200,
                description: "User added" + [price, date, user_id],
                data: answerDB.rows
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    deleteOrder: async(req, res) => {
        const {id} = req.params;
        console.log(id);
        try {
            const answerDB = await pool.query('DELETE FROM orders WHERE id = $1', [id]);
            res.json({
                message: "Delete order" + id,
                code: 200,
                description: "Order deleted with id:" + id,
                data: answerDB.rows[0]
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    getOrderById: async(req, res) => {

        const {id} = req.params;
        try {
            const answerDB = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
            res.json({
                message: "Retrieve order by id:" + id,
                code: 200,
                description: "Order with id:" + id,
                data: answerDB.rows[0]
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    },
    getOrder: async (_, res) => {
        try {
            const answerDB = await pool.query('SELECT * FROM orders');
            res.json({
                message: "Retrieved all orders",
                code: 200,
                description: "Order by id",
                data: answerDB.rows
            })

        }catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    }
}

