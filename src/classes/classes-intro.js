// const date = new Date();
// console.log(date.getTime());
var Course = /** @class */ (function () {
    function Course(title, subtitle, creationDt) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
    }
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDt.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24); // age in days
    };
    return Course;
}());
var mycourse = new Course('Typesript Bootcamp', 'Learn the language fundamentals', new Date(2020, 1, 1));
console.log(mycourse.age());
