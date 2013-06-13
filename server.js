importPackage(org.eclipse.jetty.server);
importPackage(org.eclipse.jetty.server.handler);
importPackage(org.eclipse.jetty.servlet);
importPackage(javax.servlet.http);

var contextHandler = new ServletContextHandler(ServletContextHandler.SESSIONS);
contextHandler.setContextPath('/');
contextHandler.addServlet(
  new ServletHolder(new HttpServlet(require('imageServlet'))),
 '/image.png'
);
contextHandler.addServlet(
  new ServletHolder(new HttpServlet(require('dbServlet'))),
 '/db'
);
contextHandler.addServlet(
  new ServletHolder(new HttpServlet(require('templateServlet'))),
 '/template'
);

var resourceHandler = new ResourceHandler();
resourceHandler.setDirectoriesListed(true);
resourceHandler.setResourceBase('web');
resourceHandler.setWelcomeFiles(['index.html']);

var handlerList = new HandlerList();
handlerList.setHandlers([contextHandler, resourceHandler, new DefaultHandler()]);

var server = new Server(8888);
server.setHandler(handlerList);
server.start();
server.join();
