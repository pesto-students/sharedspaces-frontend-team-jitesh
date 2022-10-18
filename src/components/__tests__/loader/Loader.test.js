import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import Loader from '../../loader/Loader'

afterEach(() => {
  cleanup()
})

test('test matches snapshot', () => {
  const component = renderer.create(<Loader />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})

test('should render loader component', () => {
  render(<Loader />)

  const loaderElement = screen.getByTestId("loader")

  expect(loaderElement).toBeInTheDocument();
})