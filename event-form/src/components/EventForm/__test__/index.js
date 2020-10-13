import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import EventForm from '../index';
import store from '../../../configureStore';

const wrapper = mount(
    <Provider store={store}>
        <EventForm />
    </Provider>
);

describe("Redux Form Submit Test", () => {
    it("renders without errors", () => {
        expect(wrapper.find(".form-container")).toHaveLength(1);
    });

    it("fills the input with a default value", () => {
        expect(wrapper.find("input").prop("name")).toBe("testField");
        expect(wrapper.find("input").prop("value")).toBe("Test Value");
    });

    it("updates input value when changed", () => {
        const event = { target: { value: "Test" } };
        wrapper.find("input").simulate("change", event);
        expect(wrapper.find("input").prop("value")).toBe("Test");
    });

    it("resets the input value when form is submit", () => {
        wrapper.find("button.submit").simulate("click");
        expect(wrapper.find("input").prop("value")).toBe("Test Value");
    });
});