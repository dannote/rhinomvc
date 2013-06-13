importPackage(java.sql);

exports.doGet = function(request, response) {
  var resultSet = DriverManager.getConnection('jdbc:mysql://localhost/?', 'root', '')
    .createStatement()
    .executeQuery('show databases;');

  response.setContentType('text/html;charset=UTF-8');
  var writer = response.getWriter();
  writer.println('<h1>Databases</h1>');
  while (resultSet.next()) {
    writer.println(resultSet.getString('Database') + '<br />');
  }
};
