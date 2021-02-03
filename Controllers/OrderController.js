const pool = require('../dbconfig');

module.exports = {

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

