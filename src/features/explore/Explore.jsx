import React from 'react';
import JournalListItem from '../journalContainer/JournalListItem';

function Explore({allJournals, currentUser}) {
    const publicJournals = allJournals.filter((journal) => {
        if(journal.private == false){
            return journal
        }
    })

    const showPublicJournals = publicJournals.map((journal) => {
        return <JournalListItem key={journal.id} journal={journal} allJournals={allJournals} publicJournals={publicJournals} currentUser={currentUser} />
    })

    console.log(publicJournals)
  return (
    <div className='explore'>
      {showPublicJournals}
    </div>
  );
}

export default Explore;
