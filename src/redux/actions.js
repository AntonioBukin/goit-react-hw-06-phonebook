import {ADD_CONTACT} from "./types";

export const addContact = payload => {
    return {
        type: ADD_CONTACT,
        payload,
    }
}