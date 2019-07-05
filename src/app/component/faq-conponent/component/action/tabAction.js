
const CHANGE_MENU_INDEX = 'CHANGE_MENU_INDEX';
const SET_ANSWER = 'SET_ANSWER';
const GET_DATA_LIST = 'GET_DATA_LIST';
const ADD_DATAS = 'ADD_DATAS';
const ADD_MENUS = 'ADD_MENUS';


const switchIndex = _index => {
    return {
        type: CHANGE_MENU_INDEX,
        index: _index
    }
}

const setAnswer = (answer) => {
    return {
        type: SET_ANSWER,
        answer: answer
    }
}

const addMenus = (menuText) => {
    return {
        type: ADD_MENUS,
        menus: menuText
    }
}

const getDatas = () => {
    return {
        type: GET_DATAS,
    }
}

const getDataList = (_index) => {
    return {
        type: GET_DATA_LIST,
        index: _index
    }
}

const addData = (newType={})=>{
    return{
        type:ADD_DATAS,
        name:newType.name,
        value:newType.value
    }
}








