import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { Button, Checkbox, Icon, Item, Segment } from 'semantic-ui-react';
import * as BiIcons from 'react-icons/bi';

function JournalExploreItem({journal, currentUser}){
    return(
        <div className="journal-explore-item">
        <Segment.Group>
           <Segment>
               <Item.Group>
                   <Item>
                       <Item.Content>
                           <Item.Header content={journal.title}/>
                               <Item.Description>
                                   <div><BiIcons.BiUserCircle/>{journal.user.username}</div>
                                   {journal.description}
                               </Item.Description>
                       </Item.Content>
                   </Item>
               </Item.Group> 
           </Segment>
           <Segment>
               <span>
                   <Button as={Link} to={`explore/journals/${journal.id}`} color= "black" className="view-journal-btn">
                         View Journal 
                   </Button> 
               </span>
           </Segment>
       </Segment.Group>
   </div>
    )
}

export default JournalExploreItem; 