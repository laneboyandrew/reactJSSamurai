import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(message => <Message message={message.message}/>);
    let chatElements = props.state.answersData.map(answer => <Message id={answer.id} answer={answer.message}/>);

    let newMessagesElements = React.createRef();

    let addQuestion = () => {
        let text = newMessagesElements.current.value;
        alert(text);
    }
    let newChatElements = React.createRef();

    let addAnswer = () => {
        let text = newChatElements.current.value;
        alert(text);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.messages}>
                {chatElements}
            </div>

            <div>
                <textarea placeholder="Ваше сообщение" ref={newMessagesElements}></textarea>
            </div>
            <div>
                <button className={classes.addQuestionButton} onClick={addQuestion}>Add Question</button>
            </div>

            <div>
                <textarea placeholder="Ваше сообщение" ref={newChatElements}></textarea>
            </div>
            <div>
                <button className={classes.addAnswerButton} onClick={addAnswer}>Add Answer</button>
            </div>
        </div>
    )
}
export default Dialogs;
