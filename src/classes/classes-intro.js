// const date = new Date();
// console.log(date.getTime());
var Course = /** @class */ (function () {
    // private title: string;
    // private subtitle: string;
    // private creationDt: Date;
    function Course(_title, subtitle, creationDt) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDt = creationDt;
        // this.title = title;
        // this.subtitle = subtitle;
        // this.creationDt = creationDt;
    }
    Course.prototype.changeTitle = function () {
        this.title = '';
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
    return Course;
}());
var typescript = new Course('Typesript Bootcamp', 'Learn the language fundamentals', new Date(2020, 1, 1));
console.log(typescript.title);
var angular = new Course('Angular Bootcamp', 'Learn Angular Fundamentals', new Date(2022, 1, 1));
console.log(angular.title);
