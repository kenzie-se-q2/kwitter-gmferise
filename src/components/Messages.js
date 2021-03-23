import React from 'react'
import { Message, TextArea, Button, Icon, Label } from 'semantic-ui-react'

function Messages () {
  return(
    <div className="messages">
  <Message compact>
    <div className=""><img /></div>
    <div className=""><Message.Header>DisplayName <br /> @username</Message.Header></div>
    <div className=""><TextArea placeholder='What is on your mind.....' /></div>
    <Button as='div' labelPosition='right'>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        2,048
      </Label>
    </Button>
  </Message>
  </div>
  )
}

export default Messages