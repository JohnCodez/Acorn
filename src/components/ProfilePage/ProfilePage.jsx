import React from 'react'
import profilePageStyles from './ProfilePage.module.css'

const ProfilePage = ({firstName, lastName}) => {
  return (
    <div className={profilePageStyles.title}>ProfilePage: My name is {firstName+" "+lastName}</div>
  )
}

export default ProfilePage