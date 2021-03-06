import { retrieveDecks } from '../../utils/helpers'

export const GET_DECKS = 'GET_DECKS'
export const GET_DECK = 'GET_DECK'
export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function handleGetInitialData() {
    return (dispatch) => {
        var deferred =  retrieveDecks()
          .then(({ decks }) => {
            dispatch(setDecks(decks[0].decks));
        })

        return deferred.promise
    }
}

function setDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function getDeck(id) {
    return {
        type: GET_DECK,
        id
    }
}

export function createNewDeck(title) {
    return {
        type: CREATE_NEW_DECK,
        title
    }
}

export function addCardToDeck(id, { question, answer }) {
    return {
        type: ADD_CARD_TO_DECK,
        id,
        question: {
            question,
            answer
        }
    }
}
export function removeDeck(id) {
    return {
        type: REMOVE_DECK,
        id
    }
}