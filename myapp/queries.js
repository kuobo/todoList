const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: '021622',
  port: 5432,
})

const getTodo = (request, response) => {
  pool.query('SELECT * FROM  todotest', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createTodo = (request, response) => {
  const { name } = request.body

  pool.query('INSERT INTO todotest (name) VALUES ($1) RETURNING *', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`createTodo: ${results.rows[0].id}`)
  })
}
const deleteTodo = (request, response) => {
  const name = String(request.params.name)

  pool.query('DELETE FROM todotest WHERE name = $1', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`deleteTodo: ${name}`)
  })
}
module.exports = {
  getTodo,
  createTodo,
  deleteTodo,
}