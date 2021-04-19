import React, { useState } from "react";
import { Header } from "semantic-ui-react";

function Profile({currentUser}) {
  console.log(currentUser)
  const [formData, setFormData] = useState({
    image: "",
    bio: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: update the user's profile
  }

  const { image, bio } = formData;
  const profileImageStyles = {
    border: "none", 
    width: "80px", 
    height: "80px"
}


  return (
    <div className="profile">
    <form onSubmit={handleSubmit}>
      <h1>{currentUser.name}'s Profile</h1>

      {/* <label>Profile Image</label>
      <input
        type="text"
        name="image"
        autoComplete="off"
        value={image}
        onChange={handleChange}
      /> */}
      <img
        src={
          image.length
            ? image
            : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"
        }
        alt={"Username"}
        style={profileImageStyles}
      />

      {/* <label>Bio</label>
      <textarea name="bio" value={bio} onChange={handleChange} />

      <input type="submit" value="Update" /> */}
    </form>

    <Header content="User Information" /> 
    <h4>Username:</h4><span>{currentUser.username}</span>
    <h4>Name:</h4><span>{currentUser.name}</span>
    <h4>Gender:</h4><span>{currentUser.gender}</span>
    <h4>Ethnicity:</h4><span>{currentUser.ethnicity}</span>

    </div>

    
  );
}

export default Profile;