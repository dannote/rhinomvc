importPackage(java.awt.image);
importClass(java.awt.Color);
importClass(javax.imageio.ImageIO);

var width = 400, height = 400;

exports.doGet = function(request, response) {
  var image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
  var graphics = image.createGraphics();
  var color = new Color(Math.random(), Math.random(), Math.random());
  graphics.setColor(color);
  graphics.fillRect(0, 0, width, height);
  graphics.setColor(color.brighter());
  graphics.drawString('On the fly!', 10, 20);

  response.setContentType('image/png');
  var outputStream = response.getOutputStream();
  ImageIO.write(image, 'png', outputStream);
  outputStream.close();
};
