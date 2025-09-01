const ECommerceDB = {
  Products: [
    { name: "Laptop",     price: 1200, stock: 10 },
    { name: "Phone",      price: 800,  stock: 15 },
    { name: "Headphones", price: 150,  stock: 25 },
    { name: "Keyboard",   price: 50,   stock: 30 },
  ],
};

const displayData = (section) => {
  const products = ECommerceDB[section];
  if (products && products.length > 0) {
    console.log(`\n=== ${section} ===`);
    for (let i = 0; i < products.length; i++) {
      const p = products[i];
      console.log(`${i + 1}. Name: ${p.name}, Price: $${p.price}, Stock: ${p.stock}`);
    }
    console.log(`Total products: ${products.length}\n`);
  } else if (products && products.length === 0) {
    console.log(`${section} exists but has no products.`);
  } else {
    console.log(`${section} not found.`);
  }
};

const addProduct = (name, price, stock) => {
  if (!name || price < 0 || stock < 0) {
    console.log("Invalid product data. Please check name, price, and stock.");
    return;
  }
  const newProduct = { name, price, stock };
  ECommerceDB.Products.push(newProduct);
  console.log(`Product "${name}" added successfully!`);
};

displayData("Products");
addProduct("Tablet", 600, 12);
addProduct("Mouse", 25, 50);
displayData("Products");
