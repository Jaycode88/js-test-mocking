/**
 * @jest-environment jsdom
 */


const buttonClick = require("../button");

//the beforeEach function is a hook that allows you to define a setup or
//initialization step that will run before each test case in a test suite
//or test block. It is commonly used to set up a consistent environment or
//state for each test, ensuring that tests are independent and predictable.
//The beforeEach function takes a callback function as an argument.This callback
//function contains the code that will be executed before each test case.

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});
// the above takes the specified element and places it in the mock dom
// the below takes the whole index.html file and places it in the mock dom

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    //It is now easier to run all tests on the page in one code block
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});