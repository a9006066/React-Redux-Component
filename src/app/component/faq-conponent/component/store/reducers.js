

const menuIndex = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_MENU_INDEX':
            return state.map((menu, index) =>
                (action.index === index) ? menu = true : menu = false)

        default: return state
    }
}

const datas = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_DATAS':
            return {
                datas: Object.assign({}, state, {
                    [action.name]: action.value
                })
            }
        default: return state
    }
}

const dataList = (state = [], action) => {
    switch (action.type) {

        case 'GET_DATA_LIST':
            return {
                dataList: state.datas[`NO${action.index + 1}`]
            }

        default: return state
    }

}

const answer = (state = '', action) => {
    switch (action.type) {
        case 'SET_ANSWER':
            return action.answer
        default: return state
    }
}

const menus = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MENUS':
            return [...state, action.menus]
              
      
        default: return state
    }
}
