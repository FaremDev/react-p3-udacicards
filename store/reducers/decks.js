import { GET_DECKS, ADD_CARD_TO_DECK, CREATE_NEW_DECK, REMOVE_DECK } from '../actions'

export default function decks(state = {}, action) {
    switch(action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_CARD_TO_DECK:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    questions: state[action.id].questions.concat([action.question]),
                }
            }
        case CREATE_NEW_DECK:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: []
                }
            }
        case REMOVE_DECK:
            delete state[action.id]
            return {
                ...state
            }
        default:
            return state
    }
}