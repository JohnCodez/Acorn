import React from 'react'
import profilePageStyles from './ProfilePage.module.css'
import Modal from 'components/Modal'

const urlProfile = 'https://s3-alpha-sig.figma.com/img/5e34/034a/8c2def7b4634f9d725237cecc694cb4d?Expires=1652659200&Signature=BSByPqcWOolwHp2T1sj61wxrOntm6dUrQgX1HPPUsDwr5jXvYsKHnPnBMEf9zB7gCrp9M~rzOeIWU7~Krcrii3Int8IJFFmds2vexdi2QGodOi10KJByByb30Rv4F3BnQ7~~f3aiQXkcncKVCRwWYhf365cOBEwW5ITM1Sa~0v6Av9~tSylL3g-5MHlLdsYhV6brMzT91-2w07TcAG7I~qXrNTRcYXon39F2dy5omu1L4HwvfJtVvyNV2mc72se2Qxv6IvnBwZwpghjHZKUqZr8YBn5wxl0M8K35OBX0GijCqX-bO3JI9MCrudhDiHqjX7g2IWogNSfamyMdQwoFdQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
const urlBackground = 'https://s3-alpha-sig.figma.com/img/166e/eac4/33b27c5eb255ae337eb4ae02a87779cb?Expires=1652659200&Signature=exxi3IYtoWvWtu6NVaAxNYFPii85IAWqvVK82EMSc3abAQ~eVZhJVdWdR6SmnT5jY3RqCZqiOPutuu7w9o60dwLlgNWkuy9XYt-gBDpeks5kjUs0cijTuvAYiCLvpATDKQmXnPp7Moeq8JNGwM3mwJ0nIRqoY7nur-w0AbuOfoPbZ9tPloCSKKYFFg5Kv3fr6poz~8gnX5n1TaXkr~NCpgbmsRTFfg5-0je7yG527DloUT4CG-DzZhbW9BLeM8y8GIjWmN3D-tU86NKhm4B4W~KSod-ecaglSd5FTst5zVB9HoxDXPWoPEF7joXO6pBOGDin-KFp0M1w53xgCxdXEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

const ProfilePage = ({firstName, lastName, data}) => {
	const InfoDivs = () => (
		Object.keys(data).map(e => <div className={profilePageStyles.title}>{e+': '} {typeof data[e] === 'object'? JSON.stringify(data[e]) : data[e]}</div>)
	)

	const Banner = () => 
	<div style={{backgroundImage: `url(${urlBackground})`, backgroundSize: 'cover', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
		<div className={profilePageStyles.imageCropper}>
			<img src={urlProfile} style={{maxWidth: '10vw', maxHeight: '20vw', width: 'auto',borderRadius: '20vw'}}/>
		</div>
	</div>

	const UserBasicInfo = {
		birthday: data.birthday,
		email: data.email,
		location: data.location.state,
	}
	
	return (
		<div className={profilePageStyles.window} style={{height: '100vh', width: '100vw',}}>
			<div style={{textAlign: 'center', margin: 0, padding: 0}}>
				<Banner/>
				<h1 className={profilePageStyles.title}> Hi! My name is 	{firstName+" "+lastName}</h1>
				{<InfoDivs/> }
				{/* {<UserBasicInfo/>} */}
				{/* {<Modal> </Modal>} */}
			</div>
		</div>
	)
}

export default ProfilePage