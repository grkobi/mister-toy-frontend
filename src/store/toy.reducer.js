export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'

export const SET_IS_LOADING = 'SET_IS_LOADING'


// const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
//     'Outdoor', 'Battery Powered']
// const toy = {
//     _id: 't101',
//     name: 'Talking Doll',
//     price: 123,
//     labels: ['Doll', 'Battery Powered', 'Baby'],
//     createdAt: 1631031801011,
//     inStock: true,
// }



const initialState = {
    toys: [],
    isLoading: false,
}

export function toyReducer(state = initialState, action) {
    // console.log('action', action)


    switch (action.type) {
        // Cars
        case SET_IS_LOADING:
            { return { ...state, isLoading: action.isLoading } }
        case SET_TOYS:
            { return { ...state, toys: action.toys } }
        case REMOVE_TOY:
            {
                const toys = state.toys.filter(toy => toy._id !== action.toyId)
                return { ...state, toys }
            }
        case ADD_TOY:
            {
                const toys = [...state.toys, action.toy]
                return { ...state, toys }
            }
        case UPDATE_TOY:
            {
                const toys = state.toys.map(toy => toy._id === action.toy._id ? action.car : car)
                return { ...state, toys }
            }
        default:
            return state
    }
}