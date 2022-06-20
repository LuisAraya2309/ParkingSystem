const BookingModel = require('../models/Bookings')

const BookingManager = function () {
    this.usertypeStrategy = null;
};

let aux = '';

BookingManager.prototype = {
    setStrategy: function (usertypeStrategy) {
        this.usertypeStrategy = usertypeStrategy;
    },

    book: function (data) {
        return this.usertypeStrategy.book(data);
    }
};
aux = 'U';
const UserStrategy = function () {
    this.book = function (data) {
        return BookingModel(data);
    }
};
aux = 'C';
const ChiefStrategy = function () {
    this.book = function (data) {
        return BookingModel(data);
    }
};
aux = 'P';
const PreferencialStrategy = function () {
    this.book = function (data) {
        return BookingModel(data);
    }
};
aux = 'T';
const TECDriverStrategy = function () {
    this.book = function (data) {
        return BookingModel(data);
    }
};
aux = 'V';
const VisitorStrategy = function () {
    this.book = function (data) {
        return BookingModel(data);
    }
}; 


const createStrategyBook = function (data) {

    const booker = new BookingManager();

    let usertype = aux;
    switch (usertype) {
        case 'U':
            booker.setStrategy(new UserStrategy());
            break;
        case 'C':
            booker.setStrategy(new ChiefStrategy());
            break;
        case 'P':
            booker.setStrategy(new PreferencialStrategy());
            break;
        case 'T':
            booker.setStrategy(new TECDriverStrategy());
            break;
        case 'V':
            booker.setStrategy(new VisitorStrategy());
            break;
        default:
            break;
    }
    return booker.book(data);
}

module.exports = createStrategyBook
