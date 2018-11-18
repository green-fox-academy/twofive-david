'use strict'

export class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;

  constructor(name: string) {
    this.authorName = name;
  }
}
