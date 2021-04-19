import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Checkbox, Icon, Item, Segment } from 'semantic-ui-react';

function JournalListItem({journal, allJournals, setAllJournals, currentUser, setCurrentUser, userJournals}){
    const defaultPrivate = journal.private; 
    const [privateToggle, setPrivateToggle] = useState(defaultPrivate); 
    




    function handlePrivateToggle(e){
        e.preventDefault();
        if(privateToggle == true){
            setPrivateToggle(!privateToggle)
        } else if(privateToggle == false) {
            setPrivateToggle(!privateToggle)
        }
        fetch(`http://localhost:3000/journals/${journal.id}`, {
            method: 'PATCH', 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({private: privateToggle})
        })
        .then(r => r.json())
        .then(console.log)
    }

    function deleteJournalHelper(journalId){
        const updatedJournals = allJournals.filter((journal) => {
            return journal.id !== journalId; 
        })
       setAllJournals(updatedJournals);

    }
    
  

    function handleDeleteJournal() {

        fetch(`http://localhost:3000/journals/${journal.id}`, {
            method: "DELETE",

          })
            .then((res) => res.json())
            .then(deleteJournalHelper(journal.id));   
        }

    
    return(
    <div className="journal-list-item">
         <Segment.Group>
            <Segment>
            <Icon name='delete' id='clear-btn' onClick={handleDeleteJournal}/> 
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Header content={journal.title}/>
                                <Item.Description>
                                    {journal.description}
                                </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group> 
            </Segment>
            <Segment>
                <span>
                    <Checkbox toggle label="Private" defaultChecked={privateToggle} onClick={handlePrivateToggle}/> 
                    <Button as={Link} to={`/journals/${journal.id}`} color= "black" className="view-journal-btn">
                          View Journal 
                    </Button> 
                    <Button as={Link} to={`/journals/${journal.id}/edit`} color= "black" className="edit-journal-btn" >
                          Edit Journal
                    </Button> 
                </span>
            </Segment>
        </Segment.Group>
           
    </div>
    )
};
export default JournalListItem; 
