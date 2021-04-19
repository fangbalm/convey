import React from 'react'; 

function JournalSearch({handleSearchChange, searchTerm}){
    
    return(
    <div className="journal-search">
         <div className="filter">
            <input id="search-bar" type="text" placeholder="Search Journals..." value={searchTerm} onChange={handleSearchChange}/>
        </div>    
    </div>
    )
};
export default JournalSearch; 
