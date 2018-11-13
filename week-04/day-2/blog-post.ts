'use strict'
export {};

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
}

const instanceOne = new BlogPost();
instanceOne.authorName = 'John Doe';
instanceOne.title = 'Lorem Ipsum';
instanceOne.text ='Lorem ipsum dolor sit amet';
instanceOne.publicationDate = '2000.05.04';

const instanceTwo = new BlogPost();
instanceTwo.authorName = 'Tim Urban';
instanceTwo.title = 'Wait but why';
instanceTwo.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
instanceTwo.publicationDate = '2010.10.10.';

const instanceThree = new BlogPost();
instanceThree.authorName = 'William Turton';
instanceThree.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
instanceThree.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';
instanceThree.publicationDate = '2017.03.28.';
