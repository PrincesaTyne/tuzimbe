import React from "react";
import { RouteType } from "./types/common";
import {
  BsBricks,
  BsBarChartSteps,
  BsJournal,
  BsPerson,
  BsHouseDoor,
} from "react-icons/bs";

const main: RouteType[] = [
  {
    name: "Dashboard",
    icon: <BsHouseDoor size={25} />,
    path: "/",
  },
  {
    name: "Contractors",
    icon: <BsPerson size={25} />,
    path: "/contractors",
  },
  {
    name: "Materials",
    icon: <BsBricks size={25} />,
    path: "/materials",
  },
  {
    name: "Checkouts",
    icon: <BsBarChartSteps size={25} />,
    path: "/checkouts",
  },
  {
    name: "Attendances",
    icon: <BsJournal size={25} />,
    path: "/attendances",
  },
];

const routes = {
  main,
};

export default routes;
