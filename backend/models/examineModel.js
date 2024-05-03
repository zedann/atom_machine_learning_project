const mongoose = require("mongoose");

const examineSchema = new mongoose.Schema(
  {
    Sex: {
      type: String,
    },
    GeneralHealth: {
      type: String,
    },
    PhysicalHealthDays: {
      type: Number,
    },
    MentalHealthDays: {
      type: Number,
    },
    DifficultyConcentrating: {
      type: String,
      enum: ["Yes", "No"],
    },
    DifficultyWalking: {
      type: String,
      enum: ["Yes", "No"],
    },
    DifficultySleeping: {
      type: String,
      enum: ["Yes", "No"],
    },
    DifficultyDressingBathing: {
      type: String,
      enum: ["Yes", "No"],
    },
    DifficultyErrands: {
      type: String,
      enum: ["Yes", "No"],
    },
    SmokerStatus: {
      type: String,
    },
    ECigaretteUsage: {
      type: String,
    },
    AgeCategory: {
      type: String,
    },
    HeightInMeters: {
      type: Number,
    },
    WeightInKilograms: {
      type: Number,
    },
    BMI: {
      type: Number,
    },
    HadAsthma: {
      type: String,
      enum: ["Yes", "No"],
    },
    HadSkinCancer: {
      type: String,
      enum: ["Yes", "No"],
    },
    HadCOPD: {
      type: String,
      enum: ["Yes", "No"],
    },
    HadDepressiveDisorder: {
      type: String,
      enum: ["Yes", "No"],
    },
    HadKidneyDisease: {
      type: String,
      enum: ["Yes", "No"],
    },
    HadArthritis: {
      type: String,
      enum: ["Yes", "No"],
    },
    HadDiabetes: {
      type: String,
      enum: ["Yes", "No"],
    },
    DeafOrHardOfHearing: {
      type: String,
      enum: ["Yes", "No"],
    },
    BlindOrVisionDifficulty: {
      type: String,
      enum: ["Yes", "No"],
    },
    CovidPos: {
      type: String,
      enum: ["Yes", "No"],
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
