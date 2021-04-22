import React, { useState, useEffect } from 'react'; 
import { useHistory, useLocation, useParams } from 'react-router';
import moment from 'moment';
import { Segment, Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function EntryDetails({currentUser, setCurrentUser, allJournals, setAllJournals, allEntries, setAllEntries}){
    const history = useHistory(); 
    const [currentPrompt, setCurrentPrompt] = useState({}); 
    const entryId = useParams().id;
    // parseInt(useLocation().pathname.replace( /(^.+\D)(\d+)(\D.+$)/i,'$2')); 
    useEffect(() => {
        fetch(`http://localhost:3000/entries`)
          .then((r) => r.json())
          .then(setAllEntries);
    }, []);


    const currentEntry = allEntries.find((entry) => {
        if(entry.id == entryId){
            return entry;
        }
    });

    useEffect(() => {
        fetch(`http://localhost:3000/prompts/${currentEntry.prompt.id}`)
          .then((r) => r.json())
          .then(setCurrentPrompt);
    }, []);


    function handleBack(){
        history.goBack();
    }



    const dateData = moment.utc(currentEntry.date).format("dddd, MMMM Do YYYY, h:mm A"); 
   
    return(
    <div className="entry-details">
            <Segment.Group>
                <Segment>
                    <br></br>
                    <strong>Date:</strong> {dateData}
                    <br></br>
                    <strong>Mood:</strong> {currentEntry.mood}
                    <br></br>
                    <h4><strong>Prompt:</strong></h4> {currentPrompt.prompt}
                </Segment>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Item.Header content={currentEntry.title}/>
                                    <Item.Description>
                                        <div>
                                        {currentEntry.content}
                                        </div>
                                    </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group> 
                </Segment>
                <Segment>
                <Button as={Link} to={ `${currentEntry.id}/edit`} 
                        className="edit-entry-btn" >
                          Edit
                </Button> 
                <Button className="back-btn" onClick={handleBack}>
                          Back
                </Button> 
                </Segment>
             </Segment.Group>
    </div>
    )
};
export default EntryDetails; 