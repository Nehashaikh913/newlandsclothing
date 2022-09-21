function owlFunction() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1.2,
      },
      600: {
        items: 1.7,
      },
      1000: {
        items: 4,
        // touchDrag: false,
        // mouseDrag  : false,
      },
    },
  });
}

// swipe button js
var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var slider = $(".slider-btn");
var link;

slider.on("mousedown touchstart", function (event) {
  link = $(this).attr("data-link");
  mouseIsDown = true;
  slideMovementTotal = $(".product_content4").width() - $(this).width() + 10;
  initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, ".slider-btn").on("mouseup touchend", function (event) {
  if (!mouseIsDown) return;
  mouseIsDown = false;
  var currentMouse = event.clientX || event.changedTouches[0].pageX;
  var relativeMouse = currentMouse - initialMouse;

  if (relativeMouse < slideMovementTotal) {
    $(".slide-text").fadeTo(300, 1);
    slider.animate(
      {
        left: "-10px",
      },
      300
    );
    return;
  }
  slider.addClass("unlocked");
  slider.html('<i class="fa-solid fa-phone"></i>');
  setTimeout(function () {
    slider.on("click tap", function (event) {
      if (!slider.hasClass("unlocked")) return;
      slider.removeClass("unlocked");
      slider.html('<i class="fa-solid fa-angle-right"></i>');
      slider.off("click tap");
    });
  }, 0);
  setTimeout(() => {
    window.location.href = "tel://" + link;
  }, 300);
});

$(document.body).on("mousemove touchmove", function (event) {
  if (!mouseIsDown) return;

  var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
  var relativeMouse = currentMouse - initialMouse;
  var slidePercent = 1 - relativeMouse / slideMovementTotal;

  $(".slide-text").fadeTo(0, slidePercent);

  if (relativeMouse <= 0) {
    slider.css({ left: "-10px" });
    return;
  }
  if (relativeMouse >= slideMovementTotal + 10) {
    slider.css({ left: slideMovementTotal + "px" });
    return;
  }
  slider.css({ left: relativeMouse - 10 });
});

fetch("js/womensData.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["dress", "denim", "women-t-shirt", "SHOES", "SKIRTS", "SPORTS WEAR"];
    // var array = ["women-t-shirt"];
    array.forEach((element, ind) => {
      var result = "";
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += ` <div class="product-card" onclick="getItem(this)">
                        <img src="${item.image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading mt-3">
                                ${item.name}
                            </div>
                            <div class="brand">
                            ${item.category}
                            </div>
                            <div class="d-flex gap-4 gap-lg-5 align-items-center justify-content-center">
                            <div class="product-price">
                            $${item.price}
                        </div>
                        <button>Buy Now</button>
                            </div>
                        </div>
                    </div>`;
          $(`.home-carousel-${ind}`).html(result);
        });
    });
  })
  .catch((err) => console.log(err));

fetch("js/menData.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["Hoodie", "shirt", "T-SHIRT", "Jeans", "Trouser"];
    array.forEach((element, ind) => {
      var result = "";
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += `<div class="product-card" onclick="getItem(this)">
                        <img src="${item.Image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading mt-3">
                                ${item.name}
                            </div>
                            <div class="brand">
                            ${item.category}
                            </div>
                            <div class="d-flex gap-4 gap-lg-5 align-items-center justify-content-center">
                            <div class="product-price">
                                $${item.Price}
                            </div>
                            <button>Buy Now</button>
                            </div>
                        </div>
                    </div>`;
          $(`.home-men-carousel-${ind}`).html(result);
        });
    });
    owlFunction();
  })
  .catch((err) => console.log(err));

var toggle = false;
$(".search-btn").click(function (e) {
  e.preventDefault();
  toggle = !toggle;
  toggle
    ? $(this).parent().addClass("mobile")
    : $(this).parent().removeClass("mobile");
});

function getItem(item) {
var img = $(item).find('img')[0].currentSrc,
 name = $(item).find('.product-heading')[0].textContent.trim(),
 price = $(item).find('.product-price')[0].textContent.trim();
 category = $(item).find('.brand')[0].textContent.trim();
window.location.href = `product.php?name=${name}&image=${img}&price=${price}&category=${category}`;
// setSingleProduct();
}

function setSingleProduct() {
  let params = new URLSearchParams(location.search);
  let name = params.get("name");
  let image = params.get("image");
  let price = params.get("price");
  let category = params.get("category");
  $(".product-content h2").html(name);
  $(".singleProImage").attr("src", image);
  $(".singleProPrice").html(price);
  // $(".tshirt-heading h2").html(`${ category.toLowerCase()}`);
  switch (category && category.toLowerCase()) {
    case "dress":
      $(".products_section .owl-carousel").addClass("home-carousel-0");
      break;
    case "denim":
      $(".products_section .owl-carousel").addClass("home-carousel-1");
      break;
    case "women-t-shirt":
      $(".products_section .owl-carousel").addClass("home-carousel-2");
      break;
    case "shoes":
      $(".products_section .owl-carousel").addClass("home-carousel-3");
      break;
    case "skirts":
      $(".products_section .owl-carousel").addClass("home-carousel-4");
      break;
      case "hoodie":
      $(".products_section .owl-carousel").addClass("home-men-carousel-0");
      break;
    case "shirt":
      $(".products_section .owl-carousel").addClass("home-men-carousel-1");
      break;
    case "t-shirt":
      $(".products_section .owl-carousel").addClass("home-men-carousel-2");
      break;
    case "jeans":
      $(".products_section .owl-carousel").addClass("home-men-carousel-3");
      break;
    case "trouser":
      $(".products_section .owl-carousel").addClass("home-men-carousel-4");
      break;
  }
}
setSingleProduct();

// search

$('#search').keyup(function () {
  $('#result').html('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  if(searchField){
    $.getJSON('js/data.json', function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) != -1) {
          $('#result').append('<li onclick="getItemSearch(this)" class="list-group-item d-flex justify-content-between"><img src="' + value.image + '"class="search-img" /> ' + ' <span class="name">' + value.name + '</span> '+'<span class="d-none category">'+value.category+'</span>'+ '<span class="price">' + '$' + value.price + '</span>' + '<button class="">Buy now</button>' + '</li>');
        } 
      });
    });
  }
});


function getItemSearch(item) {
  var img = $(item).find("img")[0].currentSrc,
  name = $(item).find(".name")[0].textContent.trim(),
  price = $(item).find(".price")[0].textContent.trim(),
  category = $(item).find(".category")[0].textContent.trim();
window.location.href = `product.php?name=${name}&image=${img}&price=${price}&category=${category}`;
}


// smoothscroll fucntion
function scrollToElement(elementId) {
  const yOffset = -90;
  var element = document.getElementById(elementId);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

const allbtn = document.querySelector(".size-btns");
const btns = document.querySelectorAll(".sizebtn");

allbtn.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }
});

const counterbtn = document.querySelectorAll(".counterbtn");
const value = document.getElementById("value");
let count = 1;
counterbtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      if (count > 1) {
        count--;
      }
    } else {
      count = 1;
    }
    value.textContent = count;
  });
});
