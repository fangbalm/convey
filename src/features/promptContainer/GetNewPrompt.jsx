import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Form, Segment } from 'semantic-ui-react';
import * as Yup from 'yup';

function GetNewPrompt({allCategories, allPrompts, setAllPrompts, currentUser, setCurrentUser, allJournals, setAllJournals, setNewSelectedCategory, newSelectedCategory, setNewEntryPrompt, newEntryPrompt}){
    const [promptOptionState, setPromptOptionState] = useState(""); 
    const journalId = useParams().id; 
    const categories = allCategories.map((categoryObj) => {
        return {key: categoryObj.category, text: categoryObj.category, value: categoryObj.category}
    });

    const currentJournal = allJournals.find((journal) => {
        if(journal.id == journalId){
            return journal;
        }
    });
    
    const validationSchema = Yup.object({
        prompt: Yup.string().required('Please Select Prompt'),
        category: Yup.string().required('Please Select Category'),
      });

    const filteredPrompts = allPrompts.filter((promptObj) => {
        let promptCategory = promptObj.category.category; 
        if(promptCategory == newSelectedCategory.categorySelection){
            return promptObj;
        }
    });

    const promptOptions = filteredPrompts.map((promptObj) => {
        return <option key={promptObj.id} value={promptObj.prompt}>{promptObj.prompt}</option> 
    })

    function handleSelectPrompt(e){
        console.log(e.target.value)
        setPromptOptionState(e.target.value)
    }; 

    if(promptOptionState){
        filteredPrompts.map((promptObj) => {
            if(promptOptionState == promptObj.prompt){
                setNewEntryPrompt(promptObj);
                console.log(promptObj)
            }
        })
    }
    console.log(promptOptionState)

    return(
    <div className="get-new-prompt">
           <Segment clearing>
      
            <h3>Select Prompt</h3>
          <div className="col-sm-12">
            <Form className='ui form' defaultValue={{key: "test", label: "test", value: "test"}}>
            <select value={promptOptionState} onChange={handleSelectPrompt}>
            <option key="" value="" placeholder="Select Prompt">Choose Prompt...</option> 
                {promptOptions}
            </select>
              <div className="form-group">
                  <Button as={Link} to={`/journals/${currentJournal.id}/entries/new`}>
                      Submit
                  </Button>
              </div>
            </Form>
          </div>
    </Segment>
    </div>
    )
};
export default GetNewPrompt; 