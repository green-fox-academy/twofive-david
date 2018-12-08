# Rueppellii Foundation Retake

## Getting Started

- Fork this repository under your own account
- Clone the forked repository to your computer
- Create a `.gitignore` file so generated files won't be committed
- Commit your progress frequently and with descriptive commit messages
- All your answers and solutions should go in this repository

## Keep in mind

- You can use any resource online, but **please work individually**
- **Don't just copy-paste** your answers and solutions, use your own words instead
- **Don't push your work** to GitHub until your mentor announces that the time is up

## Exercises

### Exercise 1 - Text from matrix
- Write a method which takes a 2D array / matrix containing letters and returns a text
- The method should create the text from the letters found in the matrix
- Which letters to select: 
  - from every even row, select the letter found in the even columns
  - from every odd row, select the letter found in the odd columns
- The letters should be concatenated in this order: from left-top to right-bottom
- Write 2 different test cases for the method.

#### Example 1
Input 1
```
[
  ["n", "x"],
  ["m", "o"]
]
```

Result `"no"`

#### Example 2
Input 1
```
[
  ["h", "p", "e"],
  ["k", "l", "a"],
  ["l", "m", "o"]
]
```

Result `"hello"`

### Exercise 2 - Building usage
Write a method which can read and parse a file containing information about
the frequency of Green Fox Academy students' and mentors' main entrance usage.

Input file format:
- data is separated by `;`
- the first line contains info about the columns: `name;type;date`
- the column `type` contains info whether the person was a `student` or a `mentor`

Method logic:
- the method should take 2 parameters: `input file name` and `output file name`
- it should count how many times students and mentors used the door
- it should write the result into the `output file` in the below format:

```
Building usage

Students: 10
Mentors: 4
```

#### Example
[Example file can be found here.](usage.csv)


### Exercise 3 - Christmas is coming!

![](christmas.gif)

Your task is to create a program where Santa can give away gifts to the good kids.

The program should have a `Santa` and a `School` which can store `Kid`s.

#### Kid

```
Properties
- name
- age
- is good
- is happy

Behaviour
- get a gift
  - it should make the Kid happy
- introduce
  - should return information about the kid
  - example 1:  "My name is Bob, I am 10 years old. I am happy!"
  - example 2:  "My name is Alice, I am 12 years old. I am not happy."
```

We should be able to create new Kids by providing the `name`, `age` and whether it is `good`. Every kid is **not happy** by default.

#### Santa

```
Properties
- name
- age
- number of gifts

Behaviour
- introduce
  - should return information about the santa
  - example 1: "My name is Joe, I am 48 years old. I have 20 gifts in my bag."
  - example 2: "My name is Joe, I am 48 years old. I do not have any gifts in my bag."
- assign gifts
  - it should take a list of Kids as parameter
  - it should call each kid's `get a gift` behaviour if the kid is good and if Santa has any gifts left
  - if a gift is given, the `number of gifts` stored in Santa's bag should decrease (this cannot go under 0)
  - it should not do anything with the not good kids
  - in the end return the number of gifts which was given away
```

We should be able to create a new Santa by providing the `name` and `age`. The `number of gifts` should be 100 by default.

#### School

```
Properties
- list of kids

Behaviour
- enroll a new `Kid`
  - it should get a Kid as a parameter
  - add the new Kid to the `list of kids`
  - 

- have Christmas
  - it should get a Santa as a parameter
  - call Santa's `assign gifts` behaviour
```

## Question Time

### What is the purpose of the `try-catch` block, why do we use it? 

### Write an example for `try-catch`
