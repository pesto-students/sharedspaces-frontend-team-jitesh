import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer'
import Footer from '../../footer/Footer'

afterEach(() => {
    cleanup()
})


test('test matches snapshot', () => {
    const component = renderer.create(<BrowserRouter><Footer /></BrowserRouter>)

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
})
