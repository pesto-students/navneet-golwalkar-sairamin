function Person(name){
    this.name = name;
}

function Teacher(name, subject){
    Person.call(this, name);
    this.subject = subject;
}

Teacher.prototype.teach = function(){
    console.log(`${this.name} is now teaching ${this.subject}`);
}
Object.setPrototypeOf(Teacher.prototype, Person.prototype);

var teacher = new Teacher('Navneet', 'Javasciprt');
teacher.teach();