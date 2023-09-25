const images = ['/images1/F_34.png', '/images1/A_34.png', '/images1/A_54.png'];
  let currentIndex = 0;
  const imageElement = document.getElementById("image");
  
  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    imageElement.src = images[currentIndex];
  }
  
  // Initial load
  changeImage(0);
  
  const quantityButtons = document.querySelectorAll('.quantity-btn');
  const quantityInputs = document.querySelectorAll('.quantity-input');

  quantityButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      const input = document.getElementById(`${product}-quantity`);
      const currentValue = parseInt(input.value);
      
      if (button.textContent === '+') {
        input.value = currentValue + 1;
      } else if (button.textContent === '-' && currentValue > 0) {
        input.value = currentValue - 1;
      }
    });
  });

  
// Get the container for messages
const messageContainer = document.createElement('div');
messageContainer.className = 'message-container';
document.body.appendChild(messageContainer);

// Function to show messages
function showMessage(message, success) {
  const messageDiv = document.createElement('div');
  messageDiv.className = success ? 'success-message' : 'error-message';
  messageDiv.textContent = message;
  messageContainer.appendChild(messageDiv);

  // Remove the message after 3 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}

// Function to add to cart
function addToCart(product, quantity) {
  if (quantity > 0) {
    showMessage('Successfully added to the cart', true);
  } else {
    showMessage('At least 1 item should be selected', false);
  }
}

// Add click event to Add to Cart buttons
const addToCartButtons = document.querySelectorAll('.btn-1, .btn-2, .btn-3');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.getAttribute('data-product');
    const input = document.getElementById(`${product}-quantity`);
    const quantity = parseInt(input.value);
    addToCart(product, quantity);
  });
});