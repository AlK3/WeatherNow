import { createEvent, createStore } from 'effector';

export const updateCity = createEvent();

export const $city = createStore('')
                      .on(updateCity, (state, msg) => msg);