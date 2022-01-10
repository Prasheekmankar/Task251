

document.querySelector(".cont").innerHTML = `
<H1 class="heading">World Dictionary</H1>
<label for="catSearch"><h4>Enter a word you want to know about</h4></label>
<input type="search" name="search" id="catSearch"  placeholder="Search">
&nbsp<button onclick ="search(catSearch.value)" type="button" class="btn btn-info">Search</button>
`;


function search(value) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/` + value)
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log("Error:", err.message));

  function initialize(data) {
    console.log(data[0].word)
    console.log(data[0].meanings[0].definitions[0].definition)

    document.querySelector(".container").innerHTML = `<h1><strong>${data[0].word}</strong> </h1>
                                                   <h2><strong>Meaning:</strong><em> ${data[0].meanings[0].definitions[0].definition} </em></h2>
                                                   <h2><strong>Example:</strong><em> ${data[0].meanings[0].definitions[0].example} </em></h2>

    `
  }

}