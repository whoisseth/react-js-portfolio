/** @format */

import React from "react";

type Props = {
  title: string;
};

export default function PageTitle({ title }: Props) {
  return <div className="text-5xl font-bold pb-5 border-b">{title}</div>;
}
