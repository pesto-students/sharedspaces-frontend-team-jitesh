import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store/store'
import renderer from 'react-test-renderer'
import HomePage from '../../homePage/HomePage'

afterEach(() => {
  cleanup()
})


test('test matches snapshot', () => {
  const component = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </BrowserRouter>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})
