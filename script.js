let submitBtn = document.getElementById("submit-btn");

let generateGif = () => {
  // display loader until gif load
  let loader = document.querySelector(".loader");
  loader.style.display = "block";
  document.querySelector(".wrapper").style.display = "none";

  // get search value (default => laugh)
  let query = document.getElementById("search-box").value;
  // result 10 gifs displayed
  let gifCount = 10;
  // API URL
  let finalURL = `https://api.giphy.com/v1/search?api_key=${apiKey}&q=${query}&limit=${gifCount}&offset=0&rating=g&lang=en`;
  document.querySelector(".wrapper").innerHTML = "";
};

// Generate Gifs on screen load or when user clicks on submit
submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);