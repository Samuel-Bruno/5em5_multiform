import * as C from './styles'

import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg'
import { ReactComponent as MailIcon } from '../../svgs/mail.svg'
import { ReactComponent as BookIcon } from '../../svgs/book.svg'
import { Link } from 'react-router-dom'

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}


const SideBarItem = ({ title, description, icon, path, active }: Props) => {


  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea>
          {
            icon === 'profile' ? <ProfileIcon
              width={24}
              height={24}
              fill={ active ? '#25CD89' : 'white' }
            /> :
            icon === 'mail' ? <MailIcon
              width={24}
              height={24}
              fill={ active ? '#25CD89' : 'white' }
            /> :
            <BookIcon
              width={24}
              height={24}
              fill={ active ? '#25CD89' : 'white' }
            />
          }
        </C.IconArea>
        <C.Point active={active}>
        </C.Point>
      </Link>
    </C.Container>
  )

}


export default SideBarItem