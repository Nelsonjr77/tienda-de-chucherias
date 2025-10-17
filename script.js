const form = document.getElementById('productForm');
const gallery = document.getElementById('productGallery');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const imageFile = document.getElementById('imageInput').files[0];
  const description = document.getElementById('descriptionInput').value;
  const price = document.getElementById('priceInput').value;

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const productCard = document.createElement('div');
      productCard.className = 'productCard';

      productCard.innerHTML = `
        <img src="${event.target.result}" alt="Chuchería" />
        <p><strong>${description}</strong></p>
        <p>Precio: $${parseFloat(price).toFixed(2)}</p>
      `;

      gallery.appendChild(productCard);
      form.reset();
    };
    reader.readAsDataURL(imageFile);
  }
});
