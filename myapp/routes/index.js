var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/post', function (req, res, next) {
  res.send('respond with a resource');
});

router.put('/put', function (req, res, next) {
  res.send('respond with a resource');
});

router.delete('/delete', function (req, res, next) {
  res.send('respond with a resource');
});

/*
app.get('/api/users/:id', async (req, res, next) => {
  // 取得 url 中的 id 參數  
  const { id } = req.params; const sql = `    SELECT * FROM users WHERE id = $1;  `; const params = [id];
  // 使用 async await 的時候記得要在外面包一層 try catch，發生 error 的時候才 catch 的到  
  try { 
    const result = await database.query(sql, params); 
    if (result !== null && result.rowCount !== 0) 
    { res.status(200); res.send(result.rows[0]); } 
    else if (result.rowCount === 0) 
    { const error = new ErrorHandler('Cannot find user', 404); next(error); } }
  catch (err) {    // 如果發生 error 先 console 出來，之後會再寫一個 error-handler 來處理所有 error    
    console.log(err);
  }
});
*/

module.exports = router;
