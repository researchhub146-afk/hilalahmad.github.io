fetch('http://localhost/portfolio/portfolio-hub/')
  .then(res => res.text())
  .then(text => console.log(text.substring(15000, 35000)))
  .catch(err => console.error(err));
