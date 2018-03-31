
module.exports = (title, body, scripts) => `
<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="/styles.css">
  <link href="https://fonts.googleapis.com/css?family=Raleway|Roboto" rel="stylesheet">
</head>
<body>
  ${body}
  <div id="recommendations-app"></div>  
</body>
${scripts}
<script src="http://54.193.96.60:3004/restaurants/id/bundle.js"></script>
</html>
`;



