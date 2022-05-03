import React from 'react'
import ProfilePageContainer from 'containers/ProfilePageContainer.jsx'

const profile = ({profileId}) => {
  return (
    <ProfilePageContainer id={profileId}/>
  )
}

export const getServerSideProps = (context) => {
  console.log(context.params)
  return {props: {
    profileId: context.params.id
  }}
}

export default profile