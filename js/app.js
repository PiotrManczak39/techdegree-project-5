
$(document).ready(function() {
       $("#lightgallery").lightGallery();
   });

const searchBar = document.querySelector('.search-game');
searchBar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  const images = document.getElementsByTagName("img");
  Array.from(images).forEach(function(image){
    const description = image.getAttribute('alt')
    if (description.toLowerCase().indexOf(term) == -1) {
      image.style.display = 'none';
    } else {
      image.style.display = 'block';
    }
  });
});
