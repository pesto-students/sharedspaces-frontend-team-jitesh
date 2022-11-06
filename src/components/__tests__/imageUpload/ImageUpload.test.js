import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import ImageUpload from '../../imageUpload/ImageUpload'

afterEach(() => {
  cleanup()
})

test('test matches snapshot', () => {
  const component = renderer.create(<ImageUpload />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();
})

test('should render imageUpload component', () => {
  render(<ImageUpload />)

  const imageUploadElement = screen.getByTestId("imageUpload")

  expect(imageUploadElement).toBeInTheDocument();
})
