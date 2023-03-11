const findTheOldest = function(people) {
    const oldest = people.sort((a,b) => {
        if(!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
        if(!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
        const personA = a.yearOfDeath - a.yearOfBirth;
        const personB = b.yearOfDeath - b.yearOfBirth;
        return personA > personB ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
