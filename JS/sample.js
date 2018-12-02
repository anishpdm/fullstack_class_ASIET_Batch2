var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setDetails = function (n, r) {
        this.name = n;
        this.rollno = r;
    };
    return Student;
}());
var s = new Student();
s.setDetails("Rajesh", 23);
console.log(s);
