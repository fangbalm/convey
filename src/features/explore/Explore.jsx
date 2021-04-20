import React, { useEffect } from 'react';
// import JournalListItem from '../journalContainer/JournalListItem';
import JournalExploreItem from './JournalExploreItem';

function Explore({allJournals, currentUser, setAllJournals}) {
    
    useEffect(() => {
        fetch(`http://localhost:3000/journals`)
          .then((r) => r.json())
          .then(setAllJournals);
    }, []);
    

    const publicJournals = allJournals.filter((journal) => {
        if(journal.private == false){
            return journal
        }
    })

    const showPublicJournals = publicJournals.map((journal) => {
        return <JournalExploreItem key={journal.id} journal={journal} allJournals={allJournals} publicJournals={publicJournals} currentUser={currentUser} />
    })

    console.log(publicJournals)
  return (
    <div className='explore'>
        Explore Page
      {showPublicJournals}
    </div>
  );
}

export default Explore;
