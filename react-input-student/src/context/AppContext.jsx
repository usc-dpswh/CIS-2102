import React from 'react';

const AppContext = React.createContext({
    "inputID": "",
    "setInputID": () => {},
    "filterByID": () => {},
    "filteredStudents": {},
});

export default AppContext;
