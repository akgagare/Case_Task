const mongoose = require("mongoose");

const caseschema = new mongoose.Schema({
    caseCode:{
        type: String,
        required: true
    },
    claimantName:{
        type: String,
        required: true
    },
    claimAmount:{
        type: Number,
        required: true
    },
    hospitalName:{
        type: String
    },
    doctorName:{
        type: String
    },
    status:{
        type: String,
        default: 'Pending'
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
    updatedDate:{
        type: Date
    }
})

const CaseDetails = new mongoose.model("Casedetail", caseschema);

module.exports = CaseDetails;