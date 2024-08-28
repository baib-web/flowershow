<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Preview on Hover</title>
  <link href="path/to/your/tailwind.css" rel="stylesheet">
</head>
<body>
  <div class="image-container">
    <img src="your-image-url.jpg" alt="Preview Image">
  </div>

  <script>
    document.querySelector('.image-container').addEventListener('wheel', function(event) {
      const img = this.querySelector('img');
      if (event.deltaY > 0) {
        img.style.transform = `translateY(-${img.height / 2}px)`;
      } else {
        img.style.transform = 'translateY(0)';
      }
    });
  </script>
</body>
</html>
