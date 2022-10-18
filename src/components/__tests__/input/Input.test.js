import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import Input from '../../input/Input'

afterEach(() => {
    cleanup()
})

test('test matches snapshot', () => {
    const component = renderer.create(<Input />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})


test('should render input component', () => {
    render(<Input />)

    const inputElement = screen.getByTestId("input")

    expect(inputElement).toBeInTheDocument();
})