import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import ExploreEntryListItem from './ExploreEntryListItem';

function ExploreEntryList({journal, currentUser, setAllJournals, allEntries, handleDeleteEntry}){

    const entries = journal.entries; 
    const showEntryItems = entries.map((entry) => {
        return <ExploreEntryListItem key={entry.id} entry={entry} journal={journal} setAllJournals={setAllJournals} allEntries={allEntries} handleDeleteEntry={handleDeleteEntry} currentUser={currentUser}/>
      }); 
    
    return(
    <div className="entry-list">
           {/* <Button as={Link} to={`${journal.id}/entries/new/getPrompt`}
        className="add-entry-btn">
            Add Entry
           </Button> */}
           {journal.user.username + "'s Journal - "} 
           <strong>{journal.title}</strong>
          
           {showEntryItems}
    </div>
    )
};
export default ExploreEntryList; 
