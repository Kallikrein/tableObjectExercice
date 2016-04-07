(function(env) {

  function Tableau (tableName) {
    
    // private properties
    var _name = tableName || 'myTable';
    var _data = [[]];
    var _colHeaders = []; // default : []
    var _rowHeaders = []; // default : []
    
    // public properties
    this.row = 0; // default : 0
    this.col = 0; // default : 0
    this.size = 0; // row * col
  }
  Tableau.prototype.addRow = function(rowName) {
    row++;
    _rowHeader.push(rowName);
    _data.push(new Array(col + 1));
  };
  Tableau.prototype.addCol = function(colName) {
    col++;
    _colHeader.push(colName);
    _data = _data.map(function (row) {return row.push([])});
  };
  Tableau.prototype.deleteRow = function(rowName) {
  };
  Tableau.prototype.deleteCol = function(colName) {
  };
  env.Tableau = {
    create : function (tableName) {return new Tableau(tableName);}
  }
)()
