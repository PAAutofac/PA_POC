// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {AppTextField} from '../AppTextField'
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Textfield test 1', () => {
  const component = renderer.create(
    <AppTextField id="Test1" label="Test text field" type="number" width="10%" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders with or without a value", () => {
    act(() => {
      render(<AppTextField />, container);
    });
    expect(container.textContent).toBe("");
    
  });
