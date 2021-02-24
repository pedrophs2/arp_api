class User {

    name
    password
    phone
    notes

    constructor(name, pass, phone, notes){
        this.name = name
        this.password = pass
        this.phone = phone
        this.notes = notes
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password) {
        this.password = password;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(notes) {
        this.notes = notes;
    }
}

module.exports = new User()