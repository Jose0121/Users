import React from "react"
import Modal from "./Modal"
export default function Users() {
    const [user, setUser] = React.useState('')
   
    
    React.useEffect(() => {
        fetch("https://api.github.com/users/")
            .then(res => res.json())
            .then(data => setUser(data))
           
    }, [user])
    const [open, setOpen] = React.useState(false)
 
    const handleClose = () => {
        
        setOpen(false)
    }
 
    const handleOpen = () => {
        
        setOpen(true)
    }
    
 
    
    
    return (
        
            
            <div >
            
               <table className="userTable">
               <tbody>
                <tr>
                    <th>Avatar</th>
                    <th>User Name</th>
                    <th>Name</th>
                </tr>
                <tr>
                    <td><img className = "avatar" src = {user.avatar_url}/></td>
                    <td><p>{user.login}</p></td>
                    <td><u><button className="nameBtn"onClick = {handleOpen}>{user.name}</button></u></td>
                </tr>
                </tbody>
               </table>
                <Modal isOpen={open} onClose={handleClose} >
                <>
			   
			        <p>Company:{user.company}</p>
                    <p>Blog: {user.blog}</p>
                    <p>Followers: {user.followers}</p>
                    <p>Following: {user.following}</p>
                    <p>Public-repos: {user.public_repos}</p>
                    </>
                </Modal>
            </div>
       
    )

}