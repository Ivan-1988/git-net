import {ActionsTypes, MessagePageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state: MessagePageType, action: ActionsTypes) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

/*    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;

    }else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body});
    }

    return state;*/
}

type sendMessageCreatorType = ReturnType<typeof sendMessageCreator>
type updateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)

export default dialogsReducer;