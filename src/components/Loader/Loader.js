import React from "react";
import { StyledLoader } from "./StyledLoader";

export const Loader = () => (
    <StyledLoader>
        <div className="lds-dual-ring" />
    </StyledLoader>
);