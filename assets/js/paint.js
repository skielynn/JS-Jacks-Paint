function configureListeners() {
    let images = document.querySelectorAll('img');
  
    for (var i = 0; i < images.length; i++) {
      images[i].addEventListener("mouseover", function() {
        addOpacity(event);
      });
  
      images[i].addEventListener("mouseout", function() {
        removeOpacity(event);
      });
    }
  }
  
  function addOpacity(event) {
    event.target.classList.add("opacity");
    getProductInfo(event.target.id);
  }
  
  function removeOpacity(event) {
    event.target.classList.remove("opacity");
  
    let element = document.getElementById('color-price');
    element.textContent = '';
          
    let color = document.getElementById('color-name');
    color.textContent = '';
  
    event.preventDefault();
  }
  
  function getProductInfo(paintColor) {
    let price;
    let colorName;  
      
    switch (paintColor) {
      case 'pn1':           
        price = 14.99;
        colorName = 'Lime Green';
        updatePrice(colorName, price);
        break;           
      case 'pn2':
        price = 11.14;
        colorName = 'Medium Brown';
        updatePrice(colorName, price);
        break;            
      case 'pn3':
        price = 22.99;
        colorName = 'Royal Blue';
        updatePrice(colorName, price);
        break;   
      case 'pn4':
        price = 4.99;
        colorName = 'Solid Black';
        updatePrice(colorName, price);
        break;   
      case 'pn5':
        price = 8.22;
        colorName = 'Solid Cyan';
        updatePrice(colorName, price);
        break;   
      case 'pn6':
        price = 11.99;
        colorName = 'Solid Purple';
        updatePrice(colorName, price);
        break;   
      case 'pn7':
        price = 13.42;
        colorName = 'Solid Red';
        updatePrice(colorName, price);
        break;   
      case 'pn8':
        price = 21.98;
        colorName = 'Solid White';
        updatePrice(colorName, price);
        break;   
      case 'pn9':
        price = 14.99;
        colorName = 'Solid Yellow';
        updatePrice(colorName, price);
        break;   
      default:              
    }
  }
  
  function updatePrice(colorName, price) {       
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = `Price: ${price}`;
  
    let color = document.getElementById('color-name');
    color.textContent = `Color: ${colorName}`;
  }
  