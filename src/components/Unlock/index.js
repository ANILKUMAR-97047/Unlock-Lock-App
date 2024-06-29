// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  LockContainer,
  Image,
  LockText,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnloked] = useState(false)

  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Unlocked' : 'Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickLockButton = () => setIsUnloked(prevStatus => !prevStatus)

  return (
    <BgContainer>
      <LockContainer>
        <Image src={imageUrl} alt={altText} />
        <LockText>{`Your Device is ${text}`}</LockText>
      </LockContainer>
      <Button type="button" onClick={onClickLockButton}>
        {buttonText}
      </Button>
    </BgContainer>
  )
}

export default Unlock
