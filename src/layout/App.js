import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router";
import EditEntryForm from "../features/entryContainer/EditEntryForm";
import EntryDetails from "../features/entryContainer/EntryDetails";
import NewEntryForm from "../features/entryContainer/NewEntryForm";
import JournalContainer from "../features/journalContainer/JournalContainer";
import JournalDetails from "../features/journalContainer/JournalDetails";
import JournalForm from "../features/journalContainer/JournalForm";
import Home from "../features/landing/Home";
import Login from "../features/landing/Login";
import Profile from "../features/landing/Profile";
import GetNewCategory from "../features/promptContainer/GetNewCategory";
import GetNewPrompt from "../features/promptContainer/GetNewPrompt";
import Navbar from "../Navbar";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [allJournals, setAllJournals] = useState([]); 
  const [userJournals, setUserJournals] = useState([]); 
  const [allEntries, setAllEntries] = useState([]); 
  const [allPrompts, setAllPrompts] = useState([]); 
  const [allCategories, setAllCategories] = useState([]); 
  const [newSelectedCategory, setNewSelectedCategory] = useState({}); 
  const [newEntryPrompt, setNewEntryPrompt] = useState({});
  const [newEditedEntry, setNewEditedEntry] = useState({}); 
  console.log(newEditedEntry)

  // console.log(newEntryPrompt)

  // FETCH USER


  console.log(currentUser)

  // FETCH JOURNAL

  // /journals/:id/entries

  // /journals/:id/entries/:id

  // /journals/1/entries/1/edit



  useEffect(() => {
    fetch(`http://localhost:3000/journals`)
    .then((r) => r.json())
    .then(setAllJournals)
  }, []);

  // ${journal.id}/entries/${entry.id}

  // FETCH ENTRIES


  useEffect(() => {
    fetch(`http://localhost:3000/entries`)
    .then((r) => r.json())
    .then(setAllEntries)
  }, []);

  // FETCH PROMPTS 

  useEffect(() => {
    fetch(`http://localhost:3000/prompts`)
    .then((r) => r.json())
    .then(setAllPrompts)
  }, []);

  // FETCH CATEGORIES 
  useEffect(() => {
    fetch(`http://localhost:3000/categories`)
    .then((r) => r.json())
    .then(setAllCategories)
  }, []);

  function handleDeleteEntry(journals){
    setAllJournals(journals)
    console.log(journals)

  };


  return (
    <div className="App">
     <Switch>

       {/* HOMEPAGE */}

       <Route exact path="/">
         <Navbar 
         currentUser={currentUser}
         setCurrentUser={setCurrentUser}
         />
         <Home />
       </Route>

       <Route exact path="/login">
         <Navbar 
         currentUser={currentUser}
         setCurrentUser={setCurrentUser}
         />
         <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
       </Route>



       <Route exact path="/profile">
         <Navbar 
         currentUser={currentUser}
         setCurrentUser={setCurrentUser}
         />
         <Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>
       </Route>

        
        
        
        {/* JOURNALS  */}

       <Route exact path="/journals">
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <JournalContainer
          currentUser={currentUser}
          setCurrentUser={setCurrentUser} 
          allJournals={allJournals}
          setAllJournals={setAllJournals}
        />
        </Route>


        {/* NEW JOURNAL/EDIT JOURNAL */}

        <Route exact path={["/journals/new", "/journals/:id/edit"]}>
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <JournalForm 
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
        allJournals={allJournals}
        setAllJournals={setAllJournals} 
        />
        </Route>


        {/* SELECTED JOURNAL */}

        <Route exact path="/journals/:id">
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <JournalDetails
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
        allJournals={allJournals}
        handleDeleteEntry={handleDeleteEntry}
        allEntries={allEntries}
        />
        </Route>

        <Route exact path="/journals/:id/entries/new">
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <NewEntryForm
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
        allJournals={allJournals}
        setAllJournals={setAllJournals} 
        allPrompts={allPrompts}
        setAllPrompts={setAllPrompts}
        allCategories={allCategories}
        setNewSelectedCategory={setNewSelectedCategory}
        newSelectedCategory={newSelectedCategory}
        newEntryPrompt={newEntryPrompt}
    
        /> 
        </Route>


        {/* CREATE ENTRY - CATEGORY */}

        <Route exact path="/journals/:id/entries/new/getPrompt">
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <GetNewCategory
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
        allJournals={allJournals}
        setAllJournals={setAllJournals} 
        allPrompts={allPrompts}
        setAllPrompts={setAllPrompts}
        allCategories={allCategories}
        setNewSelectedCategory={setNewSelectedCategory}
        newSelectedCategory={newSelectedCategory}
        newEntryPrompt={newEntryPrompt}
        setNewEntryPrompt={setNewEntryPrompt}
        /> 
        {/* <GetNewPrompt allCategories={allCategories} allPrompts={allPrompts} setAllPrompts={setAllPrompts} currentUser={currentUser} setCurrentUser={setCurrentUser} allJournals={allJournals} setAllJournals={setAllJournals} setNewSelectedCategory={setNewSelectedCategory} newSelectedCategory={newSelectedCategory} setNewEntryPrompt={setNewEntryPrompt} newEntryPrompt={newEntryPrompt}/> */}
        </Route>


        <Route exact path="/journals/:id/entries/:id">
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <EntryDetails
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
        allJournals={allJournals}
        setAllJournals={setAllJournals}
        allEntries={allEntries}
        setAllEntries={setAllEntries}
        newEditedEntry={newEditedEntry}
        />
        </Route>




        <Route exact path="/journals/:id/entries/:id/edit">
        <Navbar 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />  
        <EditEntryForm
        currentUser={currentUser}
        setCurrentUser={setCurrentUser} 
        allJournals={allJournals}
        setAllJournals={setAllJournals} 
        allEntries={allEntries}
        setAllEntries={setAllEntries}
        /> 
        </Route>
        }
      }

     </Switch>
    </div>
  );
}

export default App;
