import { Formik } from 'formik';
import React, { useState } from 'react'; 
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import * as Yup from 'yup';
import MySelectInput from '../../common/form/MySelectInput';
import MyTextArea from '../../common/form/MyTextArea';
import MyTextInput from '../../common/form/MyTextInput';


    function NewEntryForm({allJournals,setAllJournals, newEntryPrompt}){
        const [entryTitle, setEntryTitle] = useState("");
        const [entryMood, setEntryMood] = useState("");
        const [entryContent, setEntryContent] = useState("");
        const journalId = useParams().id;
        const history = useHistory();
        const entryDate = "2021-04-22T12:39:51.259Z";

        const currentJournal = allJournals.find((journal) => {
            if(journal.id == journalId){
                return journal;
            }
        }); 

        // console.log(currentJournal)

        const initialValues = {
            journal_id: 1,
            prompt_id: 1,
            title:  '', 
            mood:  '', 
            content: '', 
            date: "2021-04-25T12:39:51.259Z",
        }; 

        const validationSchema = Yup.object({
            title: Yup.string().required('Please enter a title'),
            mood: Yup.string().required('Select Mood'),
            content: Yup.string().required('Enter Content'),
          });

        const moodArray = [
        {key: 'Happy', text: 'Happy', value: 'Happy'},
        {key: 'Sad', text: 'Sad', value: 'Sad'},
        {key: 'Angry', text: 'Angry', value: 'Angry'},
        {key: 'Confused', text: 'Confused', value: 'Confused'},
        {key: 'Mournful', text: 'Mournful', value: 'Mournful'},
        {key: 'Optimistic', text: 'Optimistic', value: 'Optimistic'},
     ];

      function handleCreateEntry(e){
          e.preventDefault();
          const newEntryObj = {
              journal_id: parseInt(journalId), 
              prompt_id: newEntryPrompt.id, 
              title: entryTitle, 
              mood: entryMood, 
              content: entryContent, 
              date: entryDate,
            
          };

        fetch(`http://localhost:3000/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObj)
            })
            .then(r => r.json())
            .then(handleUpdatedJournalEntries)
      }


        function handleUpdatedJournalEntries(newEntry){
            setAllJournals((journals) => journals.map(journal => {
            if(journal.id === parseInt(journalId)){
                return ({...journal, 
                    entries: [...journal.entries, newEntry]})
            } else {

                return (journal)
            }
        }));

        history.push(`/journals/${journalId}`)
    }

    

    return(
    <div className="new-entry-form">
         <form onSubmit={handleCreateEntry}>
            <Header color="blue" content="Entry Form"/> 
            <Header sub color='yellow' content='Prompt'/>
                    {newEntryPrompt.prompt}
                <br/>
                <label>Entry Title</label>
                 <input type="text" value={entryTitle} name="title" onChange={(e) => setEntryTitle(e.target.value)}></input>
                 <br/>
                 <label>Mood</label>
                 <select id="mood" name="mood" onChange={(e) => setEntryMood(e.target.value)}>
                     <option value={entryMood}>Angry</option>
                     <option value={entryMood}>Confused</option>
                     <option value={entryMood}>Contemplative</option>
                     <option value={entryMood}>Content</option>
                     <option value={entryMood}>Mournful</option>
                     <option value={entryMood}>Contemplative</option>
                     <option value={entryMood}>Happy</option>
                     <option value={entryMood}>Sad</option>
                     <option value={entryMood}>Excited</option>
                     <option value={entryMood}>Nervous</option>
                 </select>
                 {/* <input type="text" value={entryMood} name="mood" onChange={(e) => setEntryMood(e.target.value)}></input> */}
                 <br/>
                 <label>Content</label>
                 <textarea type="text" value={entryContent} name="content" onChange={(e) => setEntryContent(e.target.value)}></textarea>
                 <button type='submit'>Submit</button>
                 <button as={Link} to={`/journals/${journalId}`}type='submit'>Cancel</button>
             </form>
            {/* <Segment clearing>
                <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleCreateEntry}>
                    {({ isSubmitting, dirty, isValid, values }) => (
                   <Form className='ui form'>
                    <Header color='blue' content='Entry Form'/>
                    <Header sub color='yellow' content='Prompt'/>
                    {newEntryPrompt.prompt}
                    <MyTextInput name='title' placeholder='Entry Title' label='Entry Title' 
                    // onChange={(e) => console.log(e.target.value)}
                    /> 
                    <MySelectInput name='mood' placeholder='Mood' options={moodArray} label="Mood" 
                    // onChange={console.log}
                    />
                    <MyTextArea
                    name='content'
                    placeholder='Content'
                    label='Content'
                    // onChange={(e) => console.log(e.target.value)}
                    />
                    <Button 
                    // loading={isSubmitting}
                    // disabled={!isValid || !dirty || isSubmitting}
                    type='submit'
                    floated='right'
                    positive
                    content='Submit'/> 
                    <Button 
                    disabled={isSubmitting}
                    as={Link}
                    to={`/journals/${journalId}`}
                    type='submit'
                    floated='right'
                    content='Cancel' /> 
                   </Form>
                    )} 
                </Formik>
            </Segment>   */}
            
          
    </div>
    )
};
export default NewEntryForm; 
