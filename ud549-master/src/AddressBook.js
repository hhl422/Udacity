function AddressBook() {
    this.contact = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
    var self = this;
    
    setTimeout(function () {
       self.initialComplete = ture;
       if(cb){
           return cb();
       }
    },3);
}

AddressBook.prototype.addContact = function (contact) {
    this.contact.push(contact);
}

AddressBook.prototype.getContact = function (index) {
    return this.contact[index];
}

AddressBook.prototype.deleteContact = function (index) {
    this.contact.splice(index,1);
}