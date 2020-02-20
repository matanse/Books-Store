const create_book_cards = book_list => {
  let books_count = 0;
  for (book of book_list) {
    books_count += 1;
    const return_more_btn = create_card(
      book.cover,
      book.title,
      book.description,
      book.language,
      books_count
    );
    create_model_popup(books_count, book.description, return_more_btn);
  }
};

// -----   creates the model popup and close
const create_model_popup = (count, description, more_btn) => {
  const model_location = document.getElementById("model_location");

  const book_model = document.createElement("div");
  const book_model_content = document.createElement("div");
  const book_model_span_tag = document.createElement("span");
  const book_model_p_tag = document.createElement("p");

  model_location.appendChild(book_model);
  book_model.appendChild(book_model_content);
  book_model_content.appendChild(book_model_span_tag);
  book_model_content.appendChild(book_model_p_tag);
  book_model.className = "modal";
  book_model.setAttribute("id", `model_${count}`);
  book_model_content.className = "modal-content";
  book_model_span_tag.setAttribute("id", `close_${count}`);
  book_model_span_tag.setAttribute("class", "close");

  book_model_span_tag.innerHTML = "&times;";
  book_model_p_tag.innerHTML = description;

  // Get the modal
  const modal = document.getElementById(`model_${count}`);

  // Get the <span> element that closes the modal
  const span = document.getElementById(`close_${count}`);

  // When the user clicks on the button, open the modal
  more_btn.onclick = function() {
    modal.style.display = "block";
  };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

// ------ creates card by card and return the button for the model
const create_card = (
  cover,
  title,
  description,
  language,
  card_number_for_button_id
) => {
  const cards_location = document.getElementById("books_location");

  const flip_card = document.createElement("div");
  const flip_card_inner = document.createElement("div");
  const flip_card_front = document.createElement("div");
  const flip_card_front_img = document.createElement("img");
  const flip_card_back = document.createElement("div");
  const flip_card_back_h1 = document.createElement("h1");
  const flip_card_back_p = document.createElement("p");
  const flip_card_back_lang = document.createElement("p");
  const more_button = document.createElement("button");

  flip_card.className = "flip-card";
  flip_card_inner.className = "flip-card-inner";
  flip_card_front.className = "flip-card-front";
  flip_card_back.className = "flip-card-back";
  more_button.className = "button";
  more_button.setAttribute("id", `btn_${card_number_for_button_id}`);

  flip_card_front_img.className = "book-front-cover-img";

  cards_location.appendChild(flip_card);
  flip_card.appendChild(flip_card_inner);
  flip_card_inner.appendChild(flip_card_front);
  flip_card_front.appendChild(flip_card_front_img);
  flip_card_inner.appendChild(flip_card_back);
  flip_card_back.appendChild(flip_card_back_h1);
  flip_card_back.appendChild(flip_card_back_p);
  flip_card_back.appendChild(flip_card_back_lang);
  flip_card_back.appendChild(more_button);

  flip_card_front_img.setAttribute("src", cover);
  flip_card_back_h1.innerHTML = title;
  flip_card_back_p.innerHTML = description;
  flip_card_back_lang.innerHTML = `Language: ${language.toUpperCase()}`;
  more_button.innerHTML = "click to see cover";
  return more_button;
};

// -------- model example ---------

// --------  end model function example -------

// ---------   bootstrap side bar ------

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("book_store_title").style.fontSize = "6vw";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("book_store_title").style.fontSize = "8vw";
}

// -------  end side bar -------

// -------- drop down filter -----

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// -------- example of filter ---------

// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
