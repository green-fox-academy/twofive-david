'use strict'

interface ReservationsInt {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservations implements ReservationsInt {

  getDowBooking() {

    const daysOfTheWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    function getRandomNumber(maxNum: number) {
      return Math.floor(Math.random() * maxNum);
    }
    return daysOfTheWeek[getRandomNumber(7)];
  }

  getCodeBooking() {

    const characters: string[] = 'ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789'.split('');

    function getRandomNumber(maxNum: number) {
      return Math.floor(Math.random() * maxNum);
    }

    let bookingCode: string = '';

    for (let i = 0; i < 8; i++) {
      bookingCode += characters[getRandomNumber(characters.length)];
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
