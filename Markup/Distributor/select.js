// Get the modal
var search = document.getElementById("top-distributors");


// Get the button that opens the modal
var search_btn = document.getElementById("search-btn");

// When the user clicks the button, open the modal 
search_btn.onclick = function() {
search.style.display = "block";
}


// MENU
$('.menu li').click(function (){
    $('.container .fullscreen_menu').toggleClass('active');
    $('.container ul.toggle').toggleClass('active');

});

$(document).ready(function(){
        $('.container ul.toggle').click(function(){
            $(this).toggleClass('active');
            $('.container .fullscreen_menu').toggleClass('active');
        })
    })

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY)
})

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("li");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    }
     else {

      a[i].style.display = "none";
    }
  }
}


$('.custom-select').onClick(function(){
    $('#default').addClass('translate');
});

// function translateFuction{
//     var name = document.getElementById('default')
// }


  /*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 






//CONTACT MODAL

// Get the modal
var modal = document.getElementById("myModal");
var menu = document.getElementById("fullscreen_menu");

// Get the button that opens the modal
var btn = document.getElementById("contact");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}