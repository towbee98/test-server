const mongoose = require('mongoose');
const AccountSchema= new mongoose.Schema({
    business_name: {
type: String,
      },
business_address:{
    type: String,
          
          },
  business_email:{
    type: String,   
    unique: true,
          }, 
business_phone_number:{
    type: String,
    }, 
business_category:{
    type: String,
          
          }, 
account_number:{
    type: String,
          
          },
 logo_image:{
    type: String,
          
          }, 
house_number:{
    type: String,
          
          }, 
street_number:{
    type: String,
          
          },
 city:{
    type: String,
          
          }, 
state:{
    type: String,
          
          },
 contact_name:{
    type: String,
          
          }, 
contact_phone_number:{
    type: String,
          
          },
 contact_email_address:{
    type: String,
          
          }, 
password:{
    type: String,
          
          } ,confirm_password:{
            type: String,
              
            
                  }
})


const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;