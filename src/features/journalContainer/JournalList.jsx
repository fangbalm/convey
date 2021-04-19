import React from 'react'; 
import JournalListItem from './JournalListItem';

function JournalList({allJournals, setAllJournals, currentUser, setCurrentUser}){
    let userJournals = allJournals.filter((journal) => {
        if(journal.user.id === currentUser.id){
            return journal; 
        }
    })


    const journalComponents = userJournals.map((journal) => {
        return <JournalListItem key={journal.id} journal={journal} setAllJournals={setAllJournals} allJournals={allJournals} userJournals={userJournals} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    })
    
    return(
    <div className="journal-list">
          {currentUser.name + "'s Journals"} 
           {journalComponents}
    </div>
    )
};
export default JournalList; 
