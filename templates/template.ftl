<html>
<head>
<title>${title}</title>
</head>
<body>
<h1>${title}</h1>
<#if message??>
  <pre>${message?html}</pre>
<#else>
  <form method="post">
    <textarea name="message"></textarea>
    <p><input type="submit" value="Post!"/></p>
  </form>
</#if>
</body>
</html>
