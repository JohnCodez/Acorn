import React from 'react'
import profilePageStyles from './ProfilePage.module.css'
import Modal from 'components/Modal'

const ProfilePage = ({firstName, lastName, data}) => {
	const InfoDivs = () => (
		Object.keys(data).map(e => <div className={profilePageStyles.title}>{e+': '} {typeof data[e] === 'object'? JSON.stringify(data[e]) : data[e]}</div>)
	)
	console.log(data.location.state)

	const UserBasicInfo = {
		birthday: data.birthday,
		email: data.email,
		location: data.location.state,
	}
	
	return (
	<div style={{textAlign: 'center'}}>
		<h1 className={profilePageStyles.title}> Welcome! My name is 	{firstName+" "+lastName}</h1>
		{/* {<InfoDivs/> } */}
		{<UserBasicInfo/>}
		{/* {<Modal> </Modal>} */}
	</div>
	)
}

export default ProfilePage