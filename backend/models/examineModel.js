const mongoose = require("mongoose");

const examineSchema = new mongoose.Schema(
  {
    Sex: {
      type: String,
    },
    AgeCategory: {
      type: String,
    },
    BMI: {
      type: Number,
    },
    GenHealth: {
      type: String,
    },
    PhysicalActivity: {
      type: String,
    },
    PhysicalHealth: {
      type: Number,
    },
    MentalHealth: {
      type: Number,
    },
    SleepTime: {
      type: Number,
    },
    DiffWalking: {
      type: String,
    },
    Smoking: {
      type: String,
    },
    AlcoholDrinking: {
      type: String,
    },
    KidneyDisease: {
      type: String,
    },
    Asthma: {
      type: String,
    },
    SkinCancer: {
      type: String,
    },
    Stroke: {
      type: String,
    },
    Diabetic: {
      type: String,
    },
    result: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Examine = mongoose.model("Examine", examineSchema);

module.exports = Examine;
