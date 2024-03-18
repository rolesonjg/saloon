const mongoose = require("mongoose");
const confirmAppiontmentSchemea = new mongoose.Schema({
    // IDoftheitem :{
    //     type: String,
    // },
     // currency:{
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true
    // },
    // date: {
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true
    // },
    // amount:{
    //     type: Number,
    //     required: true
    // },
    // duration:{
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true   
    // },
    // isadded:{
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true    
    // },
     // timeunit:{
    //     type: mongoose.Schema.Types.Mixed,
    //     required: true    
    // },
      // gender:{

    // },


    selectedbuttons:{
        type: mongoose.Schema.Types.Mixed,
        required: true
    },


    selectedservice:{

        //THIS SHOULD BE AN ARRAAY
        
        type: mongoose.Schema.Types.Mixed,
                required: true
                     //THESE ARE THE items that should be on the selecTED service 
                    
                     //TAKE THis AS A REFerence

    //     logo:{
    //         type: mongoose.Schema.Types.Mixed,
    //         required: true  
    //     },
    //     heading:{
    //         type: mongoose.Schema.Types.Mixed,
    //         required: true  
    //     },
    //     style:{
    //         type: String,
    //         required: true 
    //     },
    //     amount:{
    //     type: Number,
    //     required: true
    //   },
    //     duration:{
    //      type: mongoose.Schema.Types.Mixed,
    //      required: true   
    //  },

    },

    salonname:{
        type: String,
        required: true
    },
    stylishname:{
        type: String,
        required: true
    },
  
    timevalue:{
        type: Number,
        required: true 
    },


    dateofappointment:{
        type: mongoose.Schema.Types.Mixed,
        required: true  
    },
    timeofappointment:{
        type: mongoose.Schema.Types.Mixed,
        required: true   
    },
    numberofitems:{
        type: Number,
        required: true   
    },
    totaltime:{
        type: Number,
        required: true   
    },
    totalamount:{
        type: Number,
        required: true   
    },
});
Selectedbutton = mongoose.model("confirmAppiontment", confirmAppiontmentSchemea);
module.exports = Selectedbutton;