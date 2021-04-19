import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import EntryListItem from './EntryListItem';

function EntryList({journal, currentUser, setAllJournals, allEntries, handleDeleteEntry}){

    const entries = journal.entries; 
    const showEntryItems = entries.map((entry) => {
        return <EntryListItem key={entry.id} entry={entry} journal={journal} setAllJournals={setAllJournals} allEntries={allEntries} handleDeleteEntry={handleDeleteEntry} currentUser={currentUser}/>
      }); 
    
    return(
    <div className="entry-list">
           <Button as={Link} to={`${journal.id}/entries/new/getPrompt`}
        className="add-entry-btn">
            Add Entry
           </Button>
           {currentUser.name + "'s Journal - "} 
           <strong>{journal.title}</strong>
           {showEntryItems}
    </div>
    )
};
export default EntryList; 

