import React, { useState } from 'react'; 
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

function EditEntryForm({allEntries, allJournals, setAllJournals, setAllEntries}){
    const entryId = useParams().id;
    const history = useHistory(); 
    
    // console.log(entryId);
    // console.log(history)

    const currentEntry = allEntries.find((entry) => {
        if(entry.id == entryId){
            return entry;
        } else {
            return (console.log("Error"))
        }
    }); 

    const journalId = currentEntry.journal.id
    const [newEntryTitle, setNewEntryTitle] = useState(currentEntry.title);
    const [newEntryMood, setNewEntryMood] = useState(currentEntry.mood);
    const [newEntryContent, setNewEntryContent] = useState(currentEntry.content);
    const [newEntryPrompt, setNewEntryPrompt] = useState(currentEntry.prompt);

    function handleEditEntry(e){
        e.preventDefault()

        const updatedEntryObj = {
              journal_id: currentEntry.journal.id, 
              prompt_id: newEntryPrompt.id, 
              title: newEntryTitle, 
              mood: newEntryMood, 
              content: newEntryContent, 
              date: currentEntry.date,
        }

        fetch(`http://localhost:3000/entries/${currentEntry.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(updatedEntryObj)

        })
            .then(r => r.json())
            .then(editEntryHelper)    
    }

    
    function editEntryHelper(editedEntry){
        setAllJournals((journals) => journals.map(journal => {
        if(journal.id === journalId){
            let filteredEntries = journal.entries.filter((entry) => {
                return entry.id !== editedEntry.id
            })
            return ({...journal, 
                entries: [editedEntry, ...filteredEntries]})
        } else {
            return (journal)
        }
    }));
        history.push(`/journals/${editedEntry.journal.id}`)
    }

    function handleCancel(e){
        e.preventDefault();
        history.goBack();
    }



    
    return(
    <div className="edit-entry-form">
            <form onSubmit={handleEditEntry}>
            <Header color="blue" content="Entry Form"/> 
            <Header sub color='yellow' content='Prompt'/>
                    {/* {newEntryPrompt.prompt} */}
                <br/>
                <label>Entry Title</label>
                 <input type="text" value={newEntryTitle} name="title" onChange={(e) => setNewEntryTitle(e.target.value)}></input>
                 <br/>
                 <label>Mood</label>
                 <input type="text" value={newEntryMood} name="mood" onChange={(e) => setNewEntryMood(e.target.value)}></input>
                 <br/>
                 <label>Content</label>
                 <textarea type="text" value={newEntryContent} name="content" onChange={(e) => setNewEntryContent(e.target.value)}></textarea>
                 <button type='submit'>Submit</button>
                 <button onClick={handleCancel} type='submit'>Cancel</button>
             </form>
    </div>
    )
};
export default EditEntryForm; 
