const sql = require('../../dbConfig');

const contactRequest = require('../request/contact.request')

class Contact {
    post = (contact, result)=>{ 
        sql.connect.execute(contactRequest.insert, contact, (err, res)=>{
            if(err){
                console.log('error: ', err);
                result(null, err);
                return;
            }else{
                result(null, res);
            }
        }) 
    }
}

module.exports = Contact;