import React, { PropsWithChildren, useState } from "react";

export enum CardVariant {
    outlined = "outlined",
    primary = "primary",
}

interface CardProps {
    width?: number;
    height?: number;
    variant: CardVariant;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({
    width,
    height,
    variant,

    children,
}) => {
    const [state, setState] = useState(0);
    return (
        <div
            style={{
                width,
                height,
                border:
                    variant === CardVariant.outlined
                        ? "1px solid grey"
                        : "none",
                background: variant === CardVariant.primary ? "lightgray" : "",
            }}
        >
            {children}
        </div>
    );
};

export default Card;
