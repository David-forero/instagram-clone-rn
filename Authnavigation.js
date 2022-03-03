import {firebase} from './data/firebase';
import React, {useEffect, useState} from 'react'
import { SignedInStack, SignOutStack } from './navigation'

const Authnavigation = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const useHandler = user => user ? setCurrentUser(user) : setCurrentUser(null)
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => useHandler(user))
    }, []);
    
  return (
    <>
      {currentUser ? <SignedInStack/> : <SignOutStack/>}
    </>
  )
}

export default Authnavigation