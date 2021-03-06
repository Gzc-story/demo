const mysql = require('mysql');
const sqlMap = require('./sqlMap');
const dbConfig = require('./db');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    console.log(req.body);
    var id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getAllhome(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.gethome;
      connection.query(sql,(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getAllart(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getart;
      connection.query(sql,(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  }

}