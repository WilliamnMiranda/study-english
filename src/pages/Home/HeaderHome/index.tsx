import React from "react";
import { IInfos } from "../../../interfaces/collections_interface";
interface IProps {
  infos: IInfos
}
const HeaderHome = ({ infos }: IProps) => {
  return <div>{infos.name}</div>;
};

export default HeaderHome;
