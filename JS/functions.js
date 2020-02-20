const create_book_cards = (book_list, location_by_id) => {
  //   const doc_body = document.getElementsByTagName(body);
  const cards_location = document.getElementById(location_by_id);
  let count = 0;
  for (book of book_list) {
    count += 1;
    const flip_card = create_card(
      book.cover,
      book.title,
      book.description,
      book.language,
      count
    );
    // create_model_popup(count, book.description);
    cards_location.appendChild(flip_card);
  }
};

const create_model_popup = (count, description) => {
  const book_info_model = document.createElement("div");
  const book_info_model_content = document.createElement("div");
  const book_info_model_span_tag = document.createElement("span");
  const book_info_model_p_tag = document.createElement("p");

  //   doc_body.appendChild(book_info_model);
  book_info_model.appendChild(book_info_model_content);
  book_info_model_content.appendChild(book_info_model_span_tag);
  book_info_model_content.appendChild(book_info_model_p_tag);
  book_info_model.className = "modal";
  book_info_model.setAttribute("id", `${count}_model`);
  book_info_model_content.className = "modal-content";
  book_info_model_span_tag.className = "close";

  book_info_model_span_tag.innerHTML = "&times;";
  book_info_model_p_tag.innerHTML = description;

  // Get the button that opens the modal
  const card_btn = document.getElementById(`${count}_btn`);

  // Get the modal
  const modal = document.getElementById(`${count}_model`);

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  card_btn.onclick = function() {
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

const create_card = (
  cover,
  title,
  description,
  language,
  card_number_for_button_id
) => {
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
  more_button.setAttribute("id", `${card_number_for_button_id}_btn`);
  flip_card_front_img.className = "book-front-cover-img";

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
  return flip_card;
};

// -------- model example ---------

// --------  end model function example -------

// ---------   bootstrap side bar ------

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
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
