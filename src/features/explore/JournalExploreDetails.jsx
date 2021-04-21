import React from 'react'; 
import { useHistory, useParams } from 'react-router';
import { Button, Icon } from 'semantic-ui-react';
import ExploreEntryList from './ExploreEntryList';


function JournalExploreDetails({currentUser, setCurrentUser, allJournals, setAllJournals, allEntries, handleDeleteEntry}){
    const journalId = useParams().id;
    const history = useHistory();

    // allJournals.map((journal) => {
    //     console.log(journal)
    // })

    const selectedJournalEntries = allJournals.map((journal) => {
        console.log(allJournals)
        if(journal.id == journalId){
            console.log(journal)
            return <ExploreEntryList key={journal.id} journal={journal} currentUser={currentUser} setAllJournals={setAllJournals} allEntries={allEntries} handleDeleteEntry={handleDeleteEntry} />
        }
    });

    function handleBack(){
        history.goBack();
    }

    return(
    <div className="journal-details">
        {/* <Icon circular className="icon settings"/> set background color */}
        <Button className="back-btn" onClick={handleBack}>
                          Back
                </Button> 
           {selectedJournalEntries}
    </div>
    )
};
export default JournalExploreDetails; 
