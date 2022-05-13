fetch('http://hp-api.herokuapp.com/api/characters')
.then(response => response.json())
.then(data => document.getElementById('print-here').innerHTML =
data.name)