import React, { useState } from 'react'; 
import { useParams } from 'react-router';
import { Segment, Header, Button, Checkbox } from 'semantic-ui-react';
import { Formik, Form } from 'formik';
import MyTextInput from '../../common/form/MyTextInput';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';



function JournalForm({allJournals, setAllJournals, currentUser, setCurrentUser}){
    const [selectedJournal, setSelectedJournal] = useState({}); 
    const journalId = useParams().id; 
    const [title, setTitle] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [isPrivate, setIsPrivate] = useState(true); 

    
    let history = useHistory();
    let currentJournal = allJournals.find((journal) => journal.id == journalId);

    const initialValues = currentJournal ?? {
        user_id: currentUser.id,
        title: '',
        description: '',
        private: true, 
      };
      const validationSchema = Yup.object({
        title: Yup.string().required('You must provide a title'),
        description: Yup.string().required(),
        private: Yup.boolean().required(),
      });

      function editJournalHelper(editedJournal, journalId){
          const updatedJournals = allJournals.map((journal) => {
              if(journal.id == journalId){
                  return {...editedJournal}
              } else {
                  return journal
              }
          })
          setAllJournals(updatedJournals); 
          history.push('/journals')
      }

      function handleEditJournal(values){
          const updatedJournalObj = values; 
          console.log(values)
          fetch(`http://localhost:3000/journals/${journalId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedJournalObj)
        })
            .then(r => r.json())
            .then((editedJournal) => editJournalHelper(editedJournal, journalId))
      }

      function handleCreateJournal(values){

          
          const newJournalObj = values;

          fetch("http://localhost:3000/journals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalObj)
        })
            .then(r => r.json())
            .then((newJournal) => {
                setAllJournals([...allJournals, newJournal])
                history.push("/journals");
            })
      }

    return(
        <div className="journal-form">
            <Segment clearing>
                <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => currentJournal ? handleEditJournal(values) : handleCreateJournal(values)}>
                    {({ isSubmitting, dirty, isValid, values }) => (
                   <Form className='ui form'>
                    <MyTextInput name='title' placeholder='Journal Title' label="Journal Title" /> 
                    <MyTextInput name='description' placeholder='Description' label="Description" />
                    <Button 
                    loading={isSubmitting}
                    disabled={!isValid || !dirty || isSubmitting}
                    type='submit'
                    floated='right'
                    positive
                    content='Submit'/> 
                    <Button 
                    disabled={isSubmitting}
                    as={Link}
                    to='/journals'
                    type='submit'
                    floated='right'
                    content='Cancel' /> 
                   </Form>
                    )} 
                </Formik>
            </Segment>
        </div>
    )
};
export default JournalForm; 