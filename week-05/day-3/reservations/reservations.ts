'use strict'

interface ReservationsInt {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservations implements ReservationsInt {

  createRandomNumber(num: number) {
    return Math.floor(Math.random() * num);
  }

  getDowBooking() {
    const daysOfTheWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return daysOfTheWeek[this.createRandomNumber(7)];
  }

  getCodeBooking() {
    const characters: string[] = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789'.split('');
    let bookingCode: string = '';

    for (let i = 0; i < 8; i++) {
      bookingCode += characters[this.createRandomNumber(characters.length)];
    }
    return bookingCode;
  }

  createBooking(num: number) {
    for (let i = 0; i < num; i++) {
      console.log(`Booking# ${myReserve.getCodeBooking()} for ${myReserve.getDowBooking()}`);
    }
  }
}

let myReserve = new Reservations();

myReserve.createBooking(100);
