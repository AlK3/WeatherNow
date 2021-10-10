import React from "react";
import { StyledLoader } from "./Loader.styles";

export const Loader = () => (
    <StyledLoader>
        <div className="lds-dual-ring" />
    </StyledLoader>
);