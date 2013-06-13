importPackage(Packages.freemarker.template);
importPackage(Packages.freemarker.ext.rhino);

var configuration = new Configuration();
configuration.setObjectWrapper(new RhinoWrapper());
var template = configuration.getTemplate('templates/template.ftl');

exports.doGet = function(request, response) {
  response.setContentType('text/html;charset=UTF-8');
  template.process(
    {'title': 'Compose a message'},
    response.getWriter()
  );
};

exports.doPost = function(request, response) {
  response.setContentType('text/html;charset=UTF-8');
  template.process(
    {
      'title': 'Message',
      'message': request.getParameter('message')
    },
    response.getWriter()
  );
};
