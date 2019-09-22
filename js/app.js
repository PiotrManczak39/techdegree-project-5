
$(document).ready(function() {
       $("#lightgallery").lightGallery({
         mode: 'lg-slide',
         cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
         speed:1800
       });
   });

const searchBar = document.querySelector('.search-game');
searchBar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  const images = document.getElementsByTagName("img");
  Array.from(images).forEach(function(image){
    const description = image.getAttribute('alt')
    if (description.toLowerCase().indexOf(term) == -1) {
      let space = image.parentElement;
      space.style.display = 'none';
    } else {
      let space = image.parentElement;
      space.style.display = 'block';
    }
  });
});
