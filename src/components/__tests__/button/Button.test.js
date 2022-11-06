import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import Button from '../../button/Button'

afterEach(() => {
    cleanup()
})

test('test matches snapshot', () => {
    const component = renderer.create(<Button />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})


test('should render button component', () => {
    render(<Button />)

    const buttonElement = screen.getByTestId("button")

    expect(buttonElement).toBeInTheDocument();
})