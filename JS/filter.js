const filter = books_list => {
  let search_button = document.getElementById("search_button");
  let search_input = document.getElementById("search_input");
  search_input.addEventListener("keyup", function() {
    let input_upper = search_input.value.toUpperCase();
    search_button.onclick = function() {
      let filtered_books = [];
      for (book of books_list) {
        if (
          book.title.toUpperCase().includes(input_upper) ||
          book.description.toUpperCase().includes(input_upper)
        ) {
          filtered_books.push(book);
        }
      }
      create_book_cards(filtered_books);
    };
  });
};

// const language_filter = (books_list) => {
//     const lang_filter_location = document.getElementById("myDropdown");
//     const lang_a_tag = document.createElement("a")
//     lang_filter_location.appendChild(lang_a_tag);

//     lang_a_tag.setAttribute("value", book.language.toUpperCase());
//     lang_a_tag.addEventListener("click", function)
// }
