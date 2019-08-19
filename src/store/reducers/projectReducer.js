const iniState = {
    projects: [
        {id: 1, title: 'My city', content: 'blah blah blah'},
        {id: 2, title: 'Portmore', content: 'blah blah blah'},
        {id: 3, title: 'Merch', content: 'blah blah blah'},
    ]
}

const projectReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }   
}

export default projectReducer