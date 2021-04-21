import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import JournalList from './JournalList';
import JournalSearch from './JournalSearch';

function JournalContainer({currentUser, setCurrentUser, allJournals, setAllJournals}){
    const [searchTerm, setSearchTerm] = useState("");
    // console.log(searchTerm)

    // const [userJournals, setUserJournals] = useState([]);
    // let filteredJournals = [];

    // if(allJournals){
    //     let filteredJournals = allJournals.filter((journal) => {
    //         if(journal.user.id === currentUser.id){
    //             return journal; 
    //         }
    //     })
    //     console.log(filteredJournals)
    // };

    // setUserJournals(filteredJournals);

    function handleSearchChange(e){
        setSearchTerm(e.target.value)
    }

    const lowerCaseSearch = searchTerm.toLowerCase();
    const filteredJournals = allJournals.filter(journal => journal.title.toLowerCase().includes(lowerCaseSearch))



   
    
    return(
    <div className="journal-container">
            <Button as={Link} exact="true" to="/journals/new" className="ui labeled icon button" id="add-journal-btn">
                Add Journal
            </Button>
            <JournalSearch searchTerm={searchTerm} handleSearchChange={handleSearchChange}/> 
           <JournalList allJournals={filteredJournals} setAllJournals={setAllJournals} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
    )
};
export default JournalContainer; 
