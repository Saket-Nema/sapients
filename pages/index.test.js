import React from "react";
import { shallow } from 'enzyme';
const launchYears = require("../pages/index"); 
const fetchData = require('../pages/index');

//Arrays
test('2020 should be in launch years', () => {
  console.log('launchYears');
  expect(launchYears).toContain('2020');
});

//Url
describe ("Url Update", () => {
  test('Launch year Url change', () => {  
    const url = fetchData("2020", "null", "null");
    expect(url).toBe('http://localhost:3000/?&launch_year=2020');  
    //expect(true).toBe(true);
  });

  test('Launch success Url change', () => {  
    const url = fetchData("null", true, "null");
    expect(url).toBe('http://localhost:3000/?&launch_year=2020');  
    //expect(true).toBe(true);
  });

  test('Url change', () => {  
    const url = fetchData("2020", null, null);
    expect(url).toBe('http://localhost:3000/?&launch_year=2020');  
    //expect(true).toBe(true);
  });
})



