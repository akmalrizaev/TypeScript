// const date = new Date();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        console.log('Called FreeCourse validation()');
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
var FreeCourse = /** @class */ (function (_super) {
    __extends(FreeCourse, _super);
    function FreeCourse(title, subtitle, creationDt) {
        if (creationDt === void 0) { creationDt = new Date(2023, 1, 1); }
        return _super.call(this, title, 0, subtitle, creationDt) || this;
    }
    FreeCourse.prototype.validate = function () {
        console.log('Called FreeCourse validation()');
    };
    return FreeCourse;
}(Course));
var typescript = new Course('Typesript Bootcamp', 100, 'Learn the language fundamentals', new Date(2020, 1, 1));
console.log(typescript.title);
console.log(Course.TYPESCRIPT_TITLE);
console.log(Course.TOTAL_COURSE);
var angular = new Course('Angular Bootcamp', 200, 'Learn Angular Fundamentals', new Date(2022, 1, 1));
console.log(angular.title);
Course.printTitle(typescript);
var javascript = new FreeCourse('Javascript Bootcamp', 'Learn Javascript Fundamentals', new Date(2024, 1, 1));
