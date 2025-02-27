// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response=>response.json())
// .then(data =>console.log(data))
// .catch(error=>console.log("Error",error))

async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data.title);
  } catch (error) {
    console.log("Error occur", error);
  }
}

fetchData();
