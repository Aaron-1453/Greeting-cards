/* globals localStorage */
import React, { useEffect, useState } from 'react'

import { getFriends } from '../api'
import User from './User'
import Nav from './Nav'

const FriendsList = () => {
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState('true')

  const baseUrl = 'http://localhost:3000'

  useEffect(() => {
    getFriends(localStorage.getItem('login_auth_token')).then((friends) => { setFriends(friends); setIsLoading(false) })
  }, [])

  console.log(friends)
  return (
    <div>
      {window.location.href === `${baseUrl}/friends/` &&
        <Nav username={localStorage.getItem('login_username')} />}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {friends.map((friend) => {
          return (<User key={`${friend.username}-${friend.id}`} friend={friend} />)
        })}
      </div>
    </div>
  )
}

export default FriendsList