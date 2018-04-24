/**
 * Created by vaibhav on 1/4/18
 */
import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'

class Disqus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toasts: [],
    }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment() {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!' })
    this.setState({ toasts })
  }

  render() {
    const { title, url, config } = this.props
    if (!config.disqusShortname) {
      return null
    }
    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={title}
        title={title}
        url={url}
        onNewComment={this.notifyAboutComment}
      />
    )
  }
}

export default Disqus
