const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://as9518403808:aryan2951@cluster0.nhyqik8.mongodb.net/foodData";

  const mongodb = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("connected");
      const fetched_data = await mongoose.connection.db.collection("food_items");
      const foodItems = await fetched_data.find({}).toArray();
      const foodCategory = await mongoose.connection.db.collection("foodCategory");
      const catData = await foodCategory.find({}).toArray();
      global.food_items = foodItems;
      global.foodCategory = catData;
      console.log(food_items)
      console.log("Food Category data: ", catData);
    } catch (err) {
      console.log("---", err);
    }
  };
  
mongodb();
