import * as C from "./style";
import iconSvg from "../../../assets/config.svg";
import iconShare from "../../../assets/share.svg";
import iconEdit from "../../../assets/edit.svg";
import { IInfos } from "../../../interfaces/collections_interface";
import { CircularProgressbar } from 'react-circular-progressbar';
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ModalContext } from "../../../contexts/Modal_Context";
import { CollectionContext } from "../../../contexts/Collection_Context";

const HeaderHome = () => {
  const { info: infos } = useContext(CollectionContext)
  const percentage = infos!.completedCards ? infos!.totalTasksInCards ? Math.floor(infos!.completedCards / infos!.totalTasksInCards * 100) : 0 : 0
  const { setTypeModal } = useContext(ModalContext)
  return (
    <C.ContainerHeaderInfo>
      <C.ContainerInfos>
        <C.LogoInfo>{infos!.name[0]}</C.LogoInfo>
        <C.ContainerAllInfos>
          <C.NameCollection>
            {infos!.abbreviation} - {infos!.name} <C.Icon src={iconEdit} />
          </C.NameCollection>
          <C.TextOfCompletedAndIncompleteTasks>
            <C.TextBoldItem>{infos!.completedCards} </C.TextBoldItem>
            de
            <C.TextBoldItem> {infos!.totalTasksInCards} </C.TextBoldItem>
            cards concluidos
          </C.TextOfCompletedAndIncompleteTasks>
          <C.ContainerOptionsInfos>
            <C.Icon src={iconSvg} />
            <C.ButtonStart>Estudar</C.ButtonStart>
            <C.AddDeck>
              <AiOutlinePlus onClick={() => setTypeModal('deck', 'open')} />
            </C.AddDeck>
            <C.Share>
              <C.Icon src={iconShare} /> Compartilhar
            </C.Share>
            <C.MoreOptions>
              <C.MoreOptionIcon />
              <C.MoreOptionIcon />
              <C.MoreOptionIcon />

              <C.MenuOptions>
                <C.Option> <AiOutlineDelete /> Deletar</C.Option>
              </C.MenuOptions>
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
