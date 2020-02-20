const fetch_data = () => {
  fetch("https://api.myjson.com/bins/zyv02")
    .then(response => response.json())

    .then(data => {
      console.log(data.books);
      create_book_cards(data.books, "books_location", "container");
    })
    .catch(error => {
      console.log("Error:", error);
    });
};
fetch_data();
