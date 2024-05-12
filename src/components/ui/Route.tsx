"use client";

import clsx from "clsx";
import Link from "next/link";
interface Props {
  route: string;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Route = ({ route, label, onClick, isActive }: Props) => {
  return (
    <Link
      href={route}
      onClick={onClick}
      className={clsx(isActive && "text-primary")}>
      {label}
    </Link>
  );
};

export default Route;
