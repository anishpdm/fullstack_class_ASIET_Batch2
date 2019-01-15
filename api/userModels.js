
var mongoose=require('mongoose');

var Users=mongoose.model('TestUser',{
    name:{
        type:String
    },
    age:{
        type:Number
    },
    rollno:{
        type:Number
    },
    admno:{
        type:String
    },
    college:{
        type:String

    }


});

module.exports={Users};