const fetch_data = () => {
  fetch("https://api.myjson.com/bins/zyv02")
    .then(response => response.json())

    .then(data => {
      controller(data.books);
      filter(data.books);
    })
    .catch(error => {
      console.log("Error:", error);
    });
};
fetch_data();
