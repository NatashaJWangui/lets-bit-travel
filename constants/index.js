import { FaHome } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { GiEarthAmerica } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: FaHome,
    offset:-50,
  },
  {
    id: "bookings",
    title: "Bookings",
    icon:FaUmbrellaBeach ,
    offset:-50,
  },
  {
    id: "feature",
    title: "Feature",
    icon:FaUmbrellaBeach ,
    offset:-50,
  },
  {
    id: "places",
    title: "Places",
    icon:GiEarthAmerica,
    offset:-50,
  },
  {
    id: "experience",
    title: "Experiences",
    icon:BiCommentDetail,
    offset:-50,
  },
  {
    id: "download",
    title: "Downloads",
    icon:PiDownloadSimpleBold,
    offset:-50,

  }
];
