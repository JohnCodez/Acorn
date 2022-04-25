import React from 'react'
import ProfilePage from 'components/ProfilePage'
import {data} from 'testData/data.js'

const ProfilePageContainer = ({id}) => {
	const {firstName, lastName} = data.users.find((user) => user.uuid === +id)

	return (
		<ProfilePage 
			data={data.users[0]}
			firstName={firstName} 
			lastName={lastName}
		/>
  )
}

export default ProfilePageContainer