// {
//   "sender": "John Smith",
//   "message": "Great session on React components! I found the examples very helpful.",
//   "rating": 5
// } 

  let FeedbackArray = [];

  let nextId = 1;
  
  function getAll() {
    return FeedbackArray;
  }
  
  function addOne(sender, message, rating) {
    // Check if any parameter is empty or undefined
    if (!sender || !message || !rating) {
      return false;
    }
  
    const newFeedback = {
      id: nextId++,
      sender,
      message,
      rating,
    };
  
    FeedbackArray.push(newFeedback);
    return newFeedback;
  }
  console.log(FeedbackArray, 'arry');
  
  
  function findById(id) {
    
    const Feedback = FeedbackArray.find((item) => item.id == id);
    if (Feedback) {
      return Feedback;
    } else {
      return false;
    }
  }
  
  function updateOneById(id, updatedData) {
    const Feedback = findById(id);
    if (Feedback) {
      // Update properties only if provided in updatedData
      if (updatedData.sender) {
        Feedback.sender = updatedData.sender;
      }
      if (updatedData.message) {
        Feedback.message = updatedData.message;
      }
      if (updatedData.rating) {
        Feedback.rating = updatedData.rating;
      }
      return Feedback;
    }
    return false;
  }
  
  function deleteOneById(id) {
    const Feedback = findById(id);
    if (Feedback) {
      const initialLength = FeedbackArray.length;
      FeedbackArray = FeedbackArray.filter((Feedback) => Feedback.id != id);
      return FeedbackArray.length < initialLength; // Indicate successful deletion if the length has decreased
    }
    return false; // Return false if the item was not found
  }
  
  if (require.main === module) {
    // Add Feedback
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
    console.log(result);

    console.log("getAll called:", getAll());
  
    console.log("findById called:", findById(1));
  
    console.log("updateOne called:", updateOneById(1, { message: "woohoo", rating: 10 }));
    console.log("findById called after item updated:", findById(1));
  
    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
  }
  
  Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById,
  };
  
  module.exports = Feedback;
  







if (require.main === module) {
    let result = addOne("John Smith", "message", "Great session on React components! I found the examples very helpful.", 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    // rest of the tests here
   }