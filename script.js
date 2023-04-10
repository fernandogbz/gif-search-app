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
  let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${gifCount}&offset=0&rating=g&lang=en`;
  document.querySelector(".wrapper").innerHTML = "";

  // request to API
  fetch(finalURL)
    .then((response) => response.json())
    .then((info) => {
      console.log(info.data);
      // all gifs
      let gifsData = info.data;
      gifsData.forEach((gif) => {
        // generate cards for every gif
        let container = document.createElement("div");
        container.classList.add("container");
        let iframe = document.createElement("img");
        console.log(gif);
        iframe.setAttribute("src", gif.images.downsized_medium.url);
        iframe.onload = () => {
          // if iframes has loaded correctly reduce the count when each gif loads
          gifCount--;
          if (gifCount == 0) {
            // if iframes has loaded then hide loader and display gifs UI
          loader.style.display = "none";
          document.querySelector(".wrapper").style.display = "grid";
          }
        };
        container.append(iframe);
        document.querySelector(".wrapper").append(container);
      });
    });
};

// Generate Gifs on screen load or when user clicks on submit
submitBtn.addEventListener("click", generateGif);
window.addEventListener("load", generateGif);