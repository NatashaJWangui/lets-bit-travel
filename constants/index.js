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
    id: "featured",
    title: "Featured",
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

export const Feature = [
  {
    title:"Paris",
    icon:"/paris.jpeg",
    destinations: "4 places",
  },
  {
    title:"Hongkong",
    icon:"/hongkong.jpeg",
    destinations: "3 places",
  },
  {
    title:"Thailand",
    icon:"/thailand.jpeg",
    destinations: "7 places",
  },
  {
    title:"Dubai",
    icon:"/dubai.jpeg",
    destinations: "2 places",
  },
  {
    title:"Diani",
    icon:"/diani.jpeg",
    destinations: "5 places",
  },
  {
    title:"Maasai Mara",
    icon:"/maasaimara.jpeg",
    destinations: "8 places",
  },
  {
    title:"Maldives",
    icon:"/maldives.jpeg",
    destinations: "4 places",
  },  
  {
    title:"Canada",
    icon:"/canada.jpeg",
    destinations: "3 places",
  },

];
