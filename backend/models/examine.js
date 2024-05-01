const mongoose = require('mongoose');

const examineSchema = new mongoose.Schema({
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
    type: Boolean,
  },
  DifficultyWalking: {
    type: Boolean,    
  },
  DifficultySleeping: {
    type: Boolean,
  },
  DifficultyDressingBathing: {
    type: Boolean,
  },
  DifficultyErrands: {
    type: Boolean,
  },
  SmokerStatus: {
    type:String,
  },
  ECigaretteUsage: {
    type: String,
  },AgeCategory: {
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
    type: Boolean,
  },
  HadSkinCancer: {
    type: Boolean,
  },
  HadCOPD: {
    type: Boolean,
  },
  HadDepressiveDisorder: {
    type: Boolean,
  },
  HadKidneyDisease: {
    type: Boolean,
  },
  HadArthritis: {
    type: Boolean,
  },
  HadDiabetes: {
    type: Boolean,
  },
  DeafOrHardOfHearing: {
    type: Boolean,
  },
  BlindOrVisionDifficulty: {
    type: Boolean,
  },
  CovidPos:{
    type: Boolean,
  },
  result: {
    type:Number,
  }
} , {
  timestamps: true,
})

const Examine = mongoose.model('Examine', examineSchema);

module.exports = Examine;
