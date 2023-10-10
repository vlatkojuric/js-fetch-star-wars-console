console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(url) {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
}

fetchData(url);
