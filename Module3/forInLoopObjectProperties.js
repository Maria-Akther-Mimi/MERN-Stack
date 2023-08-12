function printObjectProperties(obj) {
    // Check if the object is empty
    if (Object.keys(obj).length === 0) {
      console.log("Object is Empty");
    } else {
      for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
      }
    }
  }
  
  const myObject = {
    name: "Mimi",
    age: 22,
    city: "Barishal"
  };
  
  printObjectProperties(myObject);
  
  const emptyObject = {};
  
  printObjectProperties(emptyObject);