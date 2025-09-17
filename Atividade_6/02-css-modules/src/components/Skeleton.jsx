import React from "react";
import styles from "../styles/Skeleton.module.css";

export default function Skeleton({ variant = "rect", style, className }) {
  const classes = `${styles[variant]} ${className || ""}`;

  return <div className={classes} style={style} role="presentation" />;
}

// Como usar:
// <Skeleton variant="rect" /> - para retângulos (padrão)
// <Skeleton variant="text" /> - para textos
// <Skeleton variant="circle" /> - para círculos

// Exemplos:
// <Skeleton variant="text" style={{ width: "80%" }} /> - texto com largura personalizada
// <Skeleton variant="circle" style={{ width: 40, height: 40 }} /> - avatar circular
// <Skeleton variant="rect" style={{ height: 200 }} /> - imagem placeholder
