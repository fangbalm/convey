import React from 'react'; 
import * as BiIcons from 'react-icons/bi';


function JournalSearch({handleSearchChange, searchTerm}){
    
    return(
    <div className="journal-search">
         <div className="filter">
            <input id="search-bar" type="text" placeholder={`Search Journals...`} value={searchTerm} onChange={handleSearchChange}/>
        </div>    
    </div>
    )
};
export default JournalSearch; 
