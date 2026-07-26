fetch('http://localhost/portfolio/portfolio-hub/')
  .then(res => res.text())
  .then(text => console.log(text.substring(0, 15000)))
  .catch(err => console.error(err));
