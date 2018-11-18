'use strict'
import { BlogPost } from "./blog-post";

// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it 
// with another BlogPost

class Blog {
  title: string;
  myPosts: BlogPost[] = [];

  constructor(title: string) {
    this.title = title;
  }

  createNewPost(name: string): void {
    this.myPosts.push(new BlogPost(name));
  }

  removePost(index: number) {
    this.myPosts.splice(index, 1);
  }

  replacePost(index: number, authorName: string) {
    this.myPosts.splice(index, 1, new BlogPost(authorName));
  }
}

let myBlog = new Blog("David's blog");
myBlog.createNewPost('David');
myBlog.createNewPost('Ana');
myBlog.createNewPost('Joli');
myBlog.myPosts[0].text = 'Hello this is a test text.';
myBlog.myPosts[1].text = 'Hello this is a test text.';
myBlog.myPosts[2].text = 'Hello this is a test text.';
myBlog.replacePost(2, 'Balazs');
myBlog.myPosts[2].text = 'Hello this is a Balazs text'

console.log(myBlog);