import React from "react";
import { createContext } from "react";
import { productos } from "../assets/frontend_assets/assets";

export const TiendaContext = createContext();

const TiendaContextProvider = (props) => {
    const moneda = '$';
    const cargo_delivery = 10;

    const value = {
        productos, moneda, cargo_delivery
    }

    return (
        <TiendaContext.Provider value={value}>
            {props.children}
        </TiendaContext.Provider>
    )

}

export default TiendaContextProvider;