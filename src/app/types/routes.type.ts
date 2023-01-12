import { AiFillHome } from "react-icons/ai";

export default interface IRoute {
  path: string;
  element: React.FC;
  icon : typeof AiFillHome;
}