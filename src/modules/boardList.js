import {createAction, handleActions} from "redux-actions";

const INSERT = 'boardList/INSERT';

let id = 1;
export const insert = createAction(
    INSERT,
    ({title, body}) => ({
        id: id++,
        title,
        body})
);

const initialState = {
    boardItems: [
        {
            title: '대전 라식 수술',
            body: '대전에 라실 수술 잘하는 곳 있나요?',
        }
    ]
};

const boardList = handleActions(
    {
        [INSERT]: (state, {payload: boardItem}) => ({
            ...state,
            boardItems: state.boardItems.concat(boardItem),
        }),
    },
    initialState
);

export default boardList;