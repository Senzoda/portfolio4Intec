var contactRequest = ({
    'insert': 'INSERT into contacts (name, email, subject, message) VALUES(?,?,?,?)'

});

module.exports = contactRequest;