# Image Resizer KitKat

## Overview | Description

This project is a sample of creating a Web Api that capable of creating  images of customized sizes according to the user's needs, instantly .

## Table of Contents

- [Technicals](#technicals)
- [Instructions](#instructions)
- [API Reference](#api-reference)
- [Scripts](#scripts)
- [Run Locally](#run-locally)
- [Running Tests](#running-tests)
- [Author](#author)


## Technicals:

1. Node and Express Environment
2. Sharp package
3. Simple-node-logger package
4. HTML
5. CSS
6. ES6

## Instructions

1. install packages by running this command `npm install` or `yarn`.
2. run this command `npm run start`.
3. open `http://localhost:3000/api/images?fnm=santamonica&wdt=200&hit=150` in your browser and then try changing the image file name, width and height as well.

## API Reference

#### Resize the image

```http
  GET /api/images/?fnm={filename}&wdt={width}&hit={height}
```

| Parameter  | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `fnm`   | `string` | **Required**. filename of the desired image to be resized |
| `wdh`   | `number` | **Required**. desired width                               |
| `hit`   | `number` | **Required**. desired height                              |


## Scripts

Run prettier

```bash
  npm run prettier
```

Run eslint

```bash
  npm run lint
```

Build the project

```bash
  npm run build
```

Run the application

```bash
  npm run start
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Mahmoud-Elgharably/Image-Resizer-KitKat.git
```

Go to the project directory

```bash
  cd Image-Resizer-KitKat
```

Install dependencies

```bash
  npm install
```

Run the application

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Author

[Mahmoud Elgharably](https://twitter.com/Mahmoud62651196)
