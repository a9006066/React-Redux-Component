

const faq_menuIndex = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_MENU_INDEX':
            return state.map((menu, index) =>
                (action.index === index) ? menu = true : menu = false)

        default: return state
    }
}
const faq_datas = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_DATAS':
            return {
                faq_datas: Object.assign({}, state, {
                    [action.name]: action.value
                })
            }
        case 'SET_DATAS':
            return action.datas
            
        default: return state
    }
}
const faq_dataList = (state = [], action) => {
    switch (action.type) {

        case 'GET_DATA_LIST':
            return action.datas[`NO${action.index}`]

        default: return state
    }

}
const faq_answer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ANSWER':
            return action.answer
        default: return state
    }
}

const faq_menus = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MENUS':
            return [...state, action.menus]


        default: return state
    }
}


