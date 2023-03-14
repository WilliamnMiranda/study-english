import * as C from "./style";
import iconSvg from "../../../assets/config.svg";
import iconShare from "../../../assets/share.svg";
import iconEdit from "../../../assets/edit.svg";
import { IInfos } from "../../../interfaces/collections_interface";
interface IProps {
  infos: IInfos;
}
const HeaderHome = ({ infos }: IProps) => {
  return (
    <C.ContainerHeaderInfo>
      <C.ContainerInfos>
        <C.LogoInfo>{infos.name[0]}</C.LogoInfo>
        <C.ContainerAllInfos>
          <C.NameCollection>
            {infos.abbreviation} - {infos.name} <C.Icon src={iconEdit} />
          </C.NameCollection>
          <C.TextOfCompletedAndIncompleteTasks>
            {`${infos.completedCards} de ${infos.totalTasksInCards} cards completos`}
          </C.TextOfCompletedAndIncompleteTasks>
          <C.ContainerOptionsInfos>
            <C.Icon src={iconSvg} />
            <C.ButtonStart>Estudar</C.ButtonStart>
            <C.Share>
              <C.Icon src={iconShare} /> Compartilhar
            </C.Share>
            <C.MoreOptions>
              <C.MoreOptionIcon />
              <C.MoreOptionIcon />
              <C.MoreOptionIcon />
            </C.MoreOptions>
          </C.ContainerOptionsInfos>
        </C.ContainerAllInfos>
      </C.ContainerInfos>
      <C.ContainerGraphic> </C.ContainerGraphic>
    </C.ContainerHeaderInfo>
  );
};

export default HeaderHome;
