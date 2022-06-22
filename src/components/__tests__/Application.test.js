import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";
import Form from "components/Appointment/Form";


afterEach(cleanup);

describe("Appointment", () => {
  
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("calls the function with specific arguments", () => {
    const fn = jest.fn();
    fn(10);
    expect(fn).toHaveBeenCalledWith(10);
   });

   
});
