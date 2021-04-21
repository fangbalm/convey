import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Icon, Item, Segment, Button, Checkbox } from 'semantic-ui-react';
import moment from 'moment';

function ExploreEntryListItem({entry, journal, setAllJournals, allEntries, handleDeleteEntry, currentUser}) {
       // console.log(entry)
       const entryPreview = entry.content.split('.')[0] + "..."
       const dateData = moment.utc(entry.date).format("MM/DD/YY")
       const journalId = journal.id;
       const history = useHistory();

       function handleBack(){
         history.goBack();

       }
       
    
  return (
    <div className='entry-item'>
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Content>
                               <div>{dateData}</div>
                            <Item.Header content={entry.title}/>
                                <Item.Description>
                                    {entry.content}
                                </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group> 
            </Segment>
            <Segment>
            <Button className="back-btn" onClick={handleBack}>
                          Back
                </Button> 
              </Segment>
        </Segment.Group>
        </div>
   
  );
}

export default ExploreEntryListItem;