function selectOption(option) {
    const options = document.querySelectorAll('.option');
    options.forEach((opt) => opt.classList.remove('selected'));
    option.classList.add('selected');
    calculatePrice();
  }
  
  function calculatePrice() {
    const selectedOption = document.querySelector('.option.selected');
    const selectedMilk = document.getElementById('milk').value;
    const selectedFlavor = document.getElementById('flavor').value;
  
    let price = 1.50;
  
    if (selectedOption.textContent === 'Double Shot') {
      price *= 2;
    } else if (selectedOption.textContent === 'Triple Shot') {
      price *= 3;
    }
  
    if (selectedMilk !== 'none') {
      price += 2.00;
    }
  
    if (selectedFlavor !== 'none') {
      price += 0.75;
    }
  
    const priceElement = document.getElementById('price');
    priceElement.textContent = `Total Price: £${price.toFixed(2)}`;
  }
  