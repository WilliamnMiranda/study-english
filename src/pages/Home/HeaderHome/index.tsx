import * as C from "./style";
import iconSvg from "../../../assets/config.svg";
import iconShare from "../../../assets/share.svg";
import iconEdit from "../../../assets/edit.svg";
import { CircularProgressbar } from 'react-circular-progressbar';
import { AiOutlinePlus } from "react-icons/ai";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ModalContext } from "../../../contexts/Modal_Context";
import { CollectionContext } from "../../../contexts/Collection_Context";

const HeaderHome = () => {
  const { infoCollection } = useContext(CollectionContext)
  const { setTypeModal } = useContext(ModalContext)
  const percentage = infoCollection?.completedCards ? infoCollection?.totalTasksInCards ? Math.floor(infoCollection?.completedCards / infoCollection?.totalTasksInCards * 100) : 0 : 100
  return (
    <C.ContainerHeaderInfo>
      <C.ContainerInfos>
        <C.LogoInfo>{infoCollection?.name[0]}</C.LogoInfo>
        <C.ContainerAllInfos>
          <C.NameCollection>
            {infoCollection?.abbreviation} - {infoCollection?.name} <C.Icon src={iconEdit} />
          </C.NameCollection>
          <C.TextOfCompletedAndIncompleteTasks>
            <C.TextBoldItem>{infoCollection?.completedCards} </C.TextBoldItem>
            de
            <C.TextBoldItem> {infoCollection?.totalTasksInCards} </C.TextBoldItem>
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
            </C.MoreOptions>
          </C.ContainerOptionsInfos>
        </C.ContainerAllInfos>
      </C.ContainerInfos>
      <C.ContainerGraphic>
        <CircularProgressbar
          strokeWidth={10}
          styles={
            { root: { height: '110px' } }
          } value={percentage} maxValue={100} text={`${percentage}%`} />
      </C.ContainerGraphic>
    </C.ContainerHeaderInfo>
  );
};

export default HeaderHome;
