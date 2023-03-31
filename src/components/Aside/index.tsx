import * as C from './style'
import iconSvg from '../../assets/config.svg'
import Collections from './Collections'
const Aside = () => {
  return (
    <C.ContainerAside>
      <C.HeaderAside>
        <C.IconName> N </C.IconName>
        <C.IconConfig src={iconSvg} />
      </C.HeaderAside>
      <Collections />
    </C.ContainerAside>
  )
}

export default Aside