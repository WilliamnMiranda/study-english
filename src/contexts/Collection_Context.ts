import React,{ createContext } from "react";


const defaultValue = {
  activeValue: Boolean,
}
const CollectionContext = createContext(defaultValue)