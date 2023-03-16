import * as C from "./style";
import iconSvg from "../../../assets/config.svg";
import iconShare from "../../../assets/share.svg";
import iconEdit from "../../../assets/edit.svg";
import { IInfos } from "../../../interfaces/collections_interface";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
interface IProps {
  infos: IInfos;
}
const HeaderHome = ({ infos }: IProps) => {
  const { completedCards, totalTasksInCards } = infos
  const percentage = completedCards ? totalTasksInCards ? Math.floor(completedCards / totalTasksInCards * 100) : 0 : 0
  console.log(totalTasksInCards)
  console.log(completedCards)
  return (
    <C.ContainerHeaderInfo>
      <C.ContainerInfos>
        <C.LogoInfo>{infos.name[0]}</C.LogoInfo>
        <C.ContainerAllInfos>
          <C.NameCollection>
            {infos.abbreviation} - {infos.name} <C.Icon src={iconEdit} />
          </C.NameCollection>
          <C.TextOfCompletedAndIncompleteTasks>
            <C.TextBoldItem>{infos.completedCards} </C.TextBoldItem>
            de
            <C.TextBoldItem> {infos.totalTasksInCards} </C.TextBoldItem>
            cards concluidos
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
      <C.ContainerGraphic>
        <CircularProgressbar
          strokeWidth={10}
          styles={
            { root: { height: '110px' } }
          } value={percentage} maxValue={100} text={`${percentage}%`} /> </C.ContainerGraphic>
    </C.ContainerHeaderInfo>
  );
};

export default HeaderHome;
