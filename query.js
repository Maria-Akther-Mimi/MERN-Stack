use("mydb");


// Create a new collection.
db.createCollection("myModule");


// Removes a collection from the database.
db.myModule.drop();


// Inserts a single document into a collection.
db.myModule.insertOne({
    Title: "Module 9",
    Category: "Web Development",
    Tag: "MERN Stack"
  });
  

// Delete/remove a single document from the collection.
db.myModule.deleteOne({ Title: "Module 9" });
//   or
db.myModule.deleteOne({ Category: "Web Development" });
//   or
db.myModule.deleteOne({ Tag: "MERN Stack" });


