import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Item, Segment, Button, Checkbox } from 'semantic-ui-react';
import moment from 'moment';

function EntryListItem({entry, journal, setAllJournals, allEntries, handleDeleteEntry, currentUser}) {
       // console.log(entry)
       const entryPreview = entry.content.split('.')[0] + "..."
       const dateData = moment.utc(entry.date).format("MM/DD/YY")
       const journalId = journal.id;

      

      

    // function handleDeleteEntry(e){
    //     e.preventDefault(); 
    //     fetch(`http://localhost:3000/entries/${entry.id}`, {
    //         method: "DELETE",
    //         })
    //         .then((res) => res.json())
    //         .then(deleteEntryHelper)
    // };

    function deleteEntryHelper(entryId){
       
        handleDeleteEntry((journals) => journals.map(journal => {
            if(journal.id === parseInt(journalId)){
                const updatedEntries = allEntries.filter((entry) => {
                    return entry.id !== parseInt(entryId);
                })
                console.log({updatedEntries})
                // console.log()
                return({...journal, entries: [...updatedEntries]})
            } else{ 
                return (journal)
            }
        }));
    }

    function handleDelete(e){
        e.preventDefault(); 
        fetch(`http://localhost:3000/entries/${entry.id}`, {
            method: 'DELETE', 

        }).then((res) => res.json())
        .then(deleteEntryHelper)
           
    }
    
       
    
  return (
    <div className='entry-item'>
        <Segment.Group>
            <Segment>
                {/* HANDLE DELETE */}
            <Icon name='delete' id='clear-btn' onClick={handleDelete}/> 
                <Item.Group>
                    <Item>
                        <Item.Content>
                               <div>{dateData}</div>
                            <Item.Header content={entry.title}/>
                                <Item.Description>
                                    {entryPreview}
                                </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group> 
            </Segment>
            <Segment>
                <span>
                <Button as={Link} to={`${journal.id}/entries/${entry.id}`} color= "black" className="view-entry-btn" >
                          View Entry
                    </Button> 
                </span>
              </Segment>
        </Segment.Group>
        </div>
   
  );
}

export default EntryListItem;