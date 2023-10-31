"use client";
import React from "react";
import { ReactPropTypes as PropTypes } from "react";
import Link from "next/link";
const Button = ({
  text = "",
  className = "",
  link = "",
}: {
  className: string;
  text: string;
  link: string;
}) => {
  return (
    <>
      <button className={className}>
        <Link href={link}>{text}</Link>
      </button>
    </>
  );
};

export default Button;
