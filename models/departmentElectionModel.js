const mongoose = require("mongoose");

const departmentElectionSchema = new mongoose.Schema({
  isStarted: {
    type: Boolean,
    default: false,
  },
  isEnded: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

const DepartmentElection = mongoose.model(
  "DepartmentElection",
  departmentElectionSchema
);

module.exports = DepartmentElection;
