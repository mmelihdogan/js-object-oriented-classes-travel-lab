class Driver {
    constructor(name, date) {
        this.name = name;
        this.date = date;
    }

    startDate() {
        // let dates = this.date.split(" ");
        return new Date(this.date);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate().getFullYear();
    }
}
