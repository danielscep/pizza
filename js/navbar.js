const navbar = document.getElementById('navbar');
navbar.innerHTML = '';
navbar.innerHTML += `
  <link rel="stylesheet" href="/css/navbar.css">
    <ul>
      <li><a href="/index.html">Home</a></li>
      <li><a href="/html/produkt.html">Produkter</a></li>
      <li><a href="/html/omoss.html">Om oss</a></li>
    </ul>
`;

