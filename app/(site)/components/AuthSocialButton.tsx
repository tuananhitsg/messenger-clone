import { Button } from '@/components/ui/button'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
  onClick: () => void
  icon: IconType
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  onClick,
  icon: Icon,
}) => {
  return (
    <Button variant="outline" size="icon" className="rounded-full">
      <Icon />
    </Button>
  )
}

export default AuthSocialButton
