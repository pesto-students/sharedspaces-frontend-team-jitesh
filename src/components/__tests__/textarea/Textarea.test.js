import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer'
import Textarea from '../../textarea/Textarea'

afterEach(() => {
    cleanup()
})

test('test matches snapshot', () => {
    const component = renderer.create(<Textarea />)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})


test('should render textarea component', () => {
    render(<Textarea />)

    const textareaElement = screen.getByTestId("textarea")

    expect(textareaElement).toBeInTheDocument();
})