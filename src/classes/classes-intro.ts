// const date = new Date();

// console.log(date.getTime());

class Course {
  // private title: string;
  // private subtitle: string;
  // private creationDt: Date;

  constructor(
    private _title: string,
    private subtitle: string,
    private creationDt: Date
  ) {
    // this.title = title;
    // this.subtitle = subtitle;
    // this.creationDt = creationDt;
  }

  changeTitle() {
    this.title = '';
  }

  get age() {
    const ageInMs = new Date().getTime() - this.creationDt.getTime();
    return Math.round(ageInMs / 1000 / 60 / 24); // age in days
  }

  get title() {
    return this._title;
  }

  set title(newTitle: string) {
    if (!newTitle) {
      throw 'Title cannot be empty';
    }
    this._title = newTitle;
  }
}

const typescript = new Course(
  'Typesript Bootcamp',
  'Learn the language fundamentals',
  new Date(2020, 1, 1)
);

console.log(typescript.title);

const angular = new Course(
  'Angular Bootcamp',
  'Learn Angular Fundamentals',
  new Date(2022, 1, 1)
);

console.log(angular.title);
