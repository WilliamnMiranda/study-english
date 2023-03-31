import * as C from "./style";
import iconSvg from "../../../assets/config.svg";
import iconShare from "../../../assets/share.svg";
import iconEdit from "../../../assets/edit.svg";
import { IInfos } from "../../../interfaces/collections_interface";
import { CircularProgressbar } from 'react-circular-progressbar';
import { AiOutlinePlus } from "react-icons/ai";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { ModalContext } from "../../../contexts/Modal_Context";
import Collection from "../../../components/Aside/Collections/Collection";
import { CollectionContext } from "../../../contexts/Collection_Context";

const HeaderHome = () => {
  const { infoCollection } = useContext(CollectionContext)
  if (infoCollection == null) console.log(infoCollection)
  const { setTypeModal } = useContext(ModalContext)
  return (
    <div> a </div>
  );
};

export default HeaderHome;
