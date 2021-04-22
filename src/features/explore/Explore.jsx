import React, { useEffect, useState } from 'react';
import JournalSearch from '../journalContainer/JournalSearch';
// import JournalListItem from '../journalContainer/JournalListItem';
import JournalExploreItem from './JournalExploreItem';
import { Checkbox } from 'semantic-ui-react'

function Explore({allJournals, currentUser, setAllJournals}) {
  const [searchTerm, setSearchTerm] = useState('');
    
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


    function handleSearchChange(e){
      setSearchTerm(e.target.value)
  }

  const lowerCaseSearch = searchTerm.toLowerCase();
  const filteredJournals = publicJournals.filter(journal => journal.title.toLowerCase().includes(lowerCaseSearch))

    

    const showPublicJournals = filteredJournals.map((journal) => {
        return <JournalExploreItem key={journal.id} journal={journal} allJournals={allJournals} publicJournals={publicJournals} currentUser={currentUser} />
    })

    console.log(publicJournals)
  return (
    <div className='explore'>
       <JournalSearch searchTerm={searchTerm} handleSearchChange={handleSearchChange}/> 
       {/* <Checkbox label='View Your Journals' />
       <Checkbox label='View User Journals' /> */}

      {showPublicJournals}
    </div>
  );
}

export default Explore;
