import * as C from './styles'

type Props = {
  title:string;
  description:string;
  icon:string;
  selected:boolean;
  onClick: () => void;
}


const SelectOption = ({title, description, icon, selected, onClick}:Props) => {

  return (
    <C.Container selected={selected} onClick={onClick}>
      <C.IconArea>{icon}</C.IconArea>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  )

}


export default SelectOption