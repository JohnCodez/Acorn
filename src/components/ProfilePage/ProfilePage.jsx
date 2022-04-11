import React from 'react'
import profilePageStyles from './ProfilePage.module.css'

const ProfilePage = ({firstName, lastName, data}) => {
	const InfoDivs = () => (
		Object.keys(data).map(e => <div className={profilePageStyles.title}>{e+': '} {typeof data[e] === 'object'? JSON.stringify(data[e]) : data[e]}</div>)
	)

	return (
	<>
		<div className={profilePageStyles.title}>ProfilePage: My name is {firstName+" "+lastName}</div>
		<InfoDivs/>
	</>
	)
}

export default ProfilePage