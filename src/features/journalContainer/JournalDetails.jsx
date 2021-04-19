import React from 'react'; 
import { useParams } from 'react-router';
import EntryList from '../entryContainer/EntryList';

function JournalDetails({currentUser, setCurrentUser, allJournals, setAllJournals, allEntries, handleDeleteEntry}){
    const journalId = useParams().id;

    // allJournals.map((journal) => {
    //     console.log(journal)
    // })

    const selectedJournalEntries = allJournals.map((journal) => {
        console.log(allJournals)
        if(journal.id == journalId){
            console.log(journal)
            return <EntryList key={journal.id} journal={journal} currentUser={currentUser} setAllJournals={setAllJournals} allEntries={allEntries} handleDeleteEntry={handleDeleteEntry} />
        }
    });

    return(
    <div className="journal-details">
           {selectedJournalEntries}
    </div>
    )
};
export default JournalDetails; 
