<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<html>
   <head>
      <title>File Uploading Form</title>
   </head>
   
   <body>
      <h3>File Upload:</h3>
      Select a file to upload: <br />
      <form action = "UploadServlet" method = "post"
         enctype = "multipart/form-data">
         <input type = "file" name = "file" size = "60" />
         <br />
         <input type = "submit" value = "Upload File" />
      </form>
   </body>
   
</html>
