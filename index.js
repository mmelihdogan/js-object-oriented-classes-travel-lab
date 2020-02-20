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

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];

            return eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal) + (this.endingLocation.vertical - this.beginningLocation.vertical);
        } 

        estimatedTime(peakHour = false) {
                if(!peakHour) {
                    return this.blocksTravelled() / 3;
                }

                return this.blocksTravelled() / 2;
        }

    }