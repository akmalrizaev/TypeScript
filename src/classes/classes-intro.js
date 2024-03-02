// const date = new Date();
// console.log(date.getTime());
var Course = /** @class */ (function () {
    function Course(_title, price, subtitle, creationDt) {
        // this.title = title;
        // this.subtitle = subtitle;
        // this.creationDt = creationDt;
        this._title = _title;
        this.price = price;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        this.validate();
        Course.TOTAL_COURSE++;
    }
    Course.prototype.validate = function () {
        if (this.price <= 0) {
            throw 'Price must be larger than zero';
        }
    };
    Course.prototype.changeTitle = function () {
        this.title = '';
    };
    Course.printTitle = function (course) {
        console.log("The title of the course ".concat(course.title));
    };
    Object.defineProperty(Course.prototype, "age", {
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDt.getTime();
            return Math.round(ageInMs / 1000 / 60 / 24); // age in days
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            if (!newTitle) {
                throw 'Title cannot be empty';
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    // private title: string;
    // private subtitle: string;
    // private creationDt: Date;
    Course.TOTAL_COURSE = 0;
    Course.TYPESCRIPT_TITLE = 'Typescript Bootcamp';
    return Course;
}());
var typescript = new Course('Typesript Bootcamp', 100, 'Learn the language fundamentals', new Date(2020, 1, 1));
console.log(typescript.title);
console.log(Course.TYPESCRIPT_TITLE);
console.log(Course.TOTAL_COURSE);
var angular = new Course('Angular Bootcamp', 0, 'Learn Angular Fundamentals', new Date(2022, 1, 1));
console.log(angular.title);
Course.printTitle(typescript);
