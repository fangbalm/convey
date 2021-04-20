import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Checkbox, Icon, Item, Segment } from 'semantic-ui-react';
import * as BiIcons from 'react-icons/bi';

function JournalListItem({journal, allJournals, setAllJournals, currentUser, setCurrentUser, userJournals}){
    const defaultPrivate = journal.private; 
    const [privateToggle, setPrivateToggle] = useState(journal.private); 

    function handlePrivateToggle(){
        // e.preventDefault();
        // if(journal.private == true){
        //     setPrivateToggle(false)
        // } else if(journal.private == false){
        //     setPrivateToggle(true)
        // }
        setPrivateToggle(!privateToggle)
        fetch(`http://localhost:3000/journals/${journal.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                private: (!privateToggle),
            })
        })
        .then(r => r.json())
        .then((editedJournal) => editJournalHelper(editedJournal))
    }

    function editJournalHelper(editedJournal){
        const updatedJournals = allJournals.map((journal) => {
            if(journal.id == editedJournal.id){
                return {...editedJournal}
            } else {
                return journal
            }
        })
        setAllJournals(updatedJournals); 
        // setPrivateToggle(!privateToggle)
        console.log(editedJournal)
    }

    // function PrivateToggleHelper(){
    //     setPrivateToggle(!privateToggle)
    //     handleSetToggle();
    // }; 


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
                                    {/* <div><BiIcons.BiUserCircle/>{journal.user.username}</div> */}
                                    {journal.description}
                                </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group> 
            </Segment>
            <Segment>
                <span>
                    <Checkbox toggle label="Private" checked={privateToggle} onClick={handlePrivateToggle} /> 
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
