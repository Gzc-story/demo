var sqlMap = {
  getValue: 'SELECT * FROM test WHERE id = ?',
  setValue: 'UPDATE test SET name = ? WHERE id = ?',
  gethome:  'SELECT * FROM home',
  getart:  'SELECT * FROM blogart'
}

module.exports = sqlMap;