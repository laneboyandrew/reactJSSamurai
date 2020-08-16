let rerenderEntireTree = () => {
    console.log ("State changed")
}


let state = {
    profilePage: {
        postsData: [
            {id: 1, post: 'Hi', likesCount: 17},
            {id: 2, post: 'How are you', likesCount: 24},
            {id: 3, post: 'How are you1', likesCount: 48},
            {id: 4, post: 'How are you2', likesCount: 11},
            {id: 5, post: 'How are you3', likesCount: 154},
            {id: 6, post: 'How are you4', likesCount: 112},
        ],
        newPostText: ''
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your ItCamasutra'},
            {id: 3, message: 'Fine, thanks. When will you become a real programmist?'},
            {id: 4, message: 'Well, that is a good goal. Wish you luck!'},
            {id: 5, message: 'Sorry, now i should go to school, cos I am still fell like son of the bitch.' },
            {id: 6, message: 'YoYo'},
        ],
        answersData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Fine. How is yours?'},
            {id: 3, message: 'I hope in a year i will perfectly understand everything that happening here'},
            {id: 4, message: 'Thanks a lot, dude.'},
            {id: 5, message: 'Very common problem'},
            {id: 6, message: 'YoYo'},
        ],
        dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},
        ]
    },
    sidebar: {
        friendsData: [
            {id: 1, name: 'Andrey', image: 'https://sun9-8.userapi.com/impg/c855428/v855428364/1d5832/XvEhbdjAxKw.jpg?size=200x0&quality=90&sign=d48fb8a51124da61fec3e15bb59f6e03'}
        ],
    }
};

window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    // state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
export default state;
