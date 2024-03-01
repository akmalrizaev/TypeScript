// const date = new Date();

// console.log(date.getTime());

class Course {
  // private title: string;
  // private subtitle: string;
  // private creationDt: Date;

  constructor(
    private title: string,
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

  age() {
    const ageInMs = new Date().getTime() - this.creationDt.getTime();
    return Math.round(ageInMs / 1000 / 60 / 24); // age in days
  }
}

const mycourse = new Course(
  'Typesript Bootcamp',
  'Learn the language fundamentals',
  new Date(2020, 1, 1)
);

console.log(mycourse.age());
