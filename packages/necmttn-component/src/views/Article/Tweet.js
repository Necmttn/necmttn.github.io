import React from 'react'
import { Tweet } from 'react-twitter-widgets'

const TweetFlow = ({id, theme}) => {
  return (
    <Tweet
      tweetId={id}
      options={{theme: theme }} />
  )
}

export default TweetFlow
