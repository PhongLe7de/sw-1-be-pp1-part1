const FeedbackLib = require("./feedbackLib");

// GET /Feedbacks
const getAllFeedbacks = (req, res) => {
  const Feedbacks = FeedbackLib.getAll();
  res.json(Feedbacks);
};

// POST /Feedbacks
const createFeedback = (req, res) => {
  const { sender, message, rating } = req.body; //

  const newFeedback = FeedbackLib.addOne(sender, message, rating); // Pass all fields

  if (newFeedback) {
    res.json(newFeedback);
  } else {
    // Handle error (e.g., failed to create feedback)
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

// GET /Feedback/:FeedbackId
const getFeedbackById = (req, res) => {
  const feedbackId = req.params.feedbackId;
  const response = FeedbackLib.findById(feedbackId);
  if (res) {
    res.json(response);
  } else {
    res.status(404).json({ message: "Feedback not found" });
  }
};

// PUT /Feedbacks/:FeedbackId
const updateFeedback = (req, res) => {
  const FeedbackId = req.params.feedbackId;
  // Destructure all potential update fields
  const { sender, message, rating } = req.body;

  const updatedFeedback = FeedbackLib.updateOneById(FeedbackId, {
    sender,
    message,
    rating,
  }); // Pass updated data as an object

  if (updatedFeedback) {
    res.json(updatedFeedback);
  } else {
    // Handle update failure (e.g., feedback not found)
    res.status(404).json({ message: "feedback not found" });
  }
};

// DELETE /feedbacks/:feedbackId
const deleteFeedback = (req, res) => {
  const FeedbackId = req.params.feedbackId;
  const isDeleted = FeedbackLib.deleteOneById(FeedbackId);

  if (isDeleted) {
    res.json({ message: "Pet deleted successfully" });
  } else {
    // Handle deletion failure (e.g., feedback not found)
    res.status(404).json({ message: "Pet not found" });
  }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};
