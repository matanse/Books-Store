const fetch_data = () => {
  fetch("https://api.myjson.com/bins/zyv02")
    .then(response => response.json())

    .then(data => {
      create_book_cards(data.books);
    })
    .catch(error => {
      console.log("Error:", error);
    });
};
fetch_data();
