let randomJokes = document.querySelector(".random");
let jokesBtn = document.querySelector(".jokesBtn");
let others_body = document.querySelector(".others_body");
let copyBtn = document.querySelector(".copyBtn");

let getRandomJokes = async () => {
  let jokeRes = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  let jokeData = await jokeRes.json();

  randomJokes.innerHTML = `
    <h1>#${jokeData.id}</h1>
    <p> <span> Question: </span> ${jokeData.setup}</p>
    <p><span> Punchline:  </span> ${jokeData.punchline}</p>
  `;
  copyBtn.addEventListener("click", copyData);
};

jokesBtn.addEventListener("click", getRandomJokes);

let randomgenerate = async () => {
  let eachJokeRes = await fetch(
    "https://official-joke-api.appspot.com/random_ten"
  );
  let eachJokeData = await eachJokeRes.json();

  eachJokeData.forEach((data) => {
    let each = document.createElement("div");
    each.className = "each";
    each.innerHTML = `
      <h1>#${data.id}</h1>
      <p> <span> Question: </span> ${data.setup}</p>
      <p><span> Punchline:  </span> ${data.punchline}</p>
    `;
    others_body.appendChild(each);
  });
};
randomgenerate();
