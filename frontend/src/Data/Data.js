import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdrawal,
    UilUsdSquare,
    UilChartLine,
    UilShareAlt,
    UilUserCheck
} from "@iconscout/react-unicons";
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import Orders from '../components/Orders/Orders';
import Customers from '../components/Customers/Customers';
import Products from '../components/Products/Products';
import Analytics from '../components/Analytics/Analytics';

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    component: Orders, // Add component here
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    component: Customers, // Add component here
  },
  {
    icon: UilPackage,
    heading: "Products",
    component: Products, // Add component here
  },
  {
    icon: UilChart,
    heading: "Analytics",
    component: Analytics, // Add component here
  },
];


export const CardsData = [
    {
      title: "Sales",
      color: {
        backGround: "linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)",
        boxShadow: "0px 10px 20px 0px #FCCF31"
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround: "linear-gradient( 135deg, #fd5c63 0%, #D2122E 100%)",
        boxShadow: "0px 10px 20px 0px #fd5c63",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Revenue",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Expenses",
      color: {
backGround: "linear-gradient(19deg, #21D4FD 0%, #005A9C 100%)",
        boxShadow: "0px 10px 20px 0px #21D4FD",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
      series: [
        {
          name: "Expenses",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      noti: " Has ordered a Samsung Galaxy S21.",
      time: "5 minutes ago"
    },
    {
      img: img2,
      name: "Jessica Parker",
      noti: " Has ordered a MacBook Pro 16-inch.",
      time: "10 minutes ago"
    },
    {
      img: img3,
      name: "Michael Johnson",
      noti: " Has ordered Sony WH-1000XM4 headphones.",
      time: "30 minutes ago"
    }
  ];
  
  export const AlternativeCardData = [
    {
      title: "Engagement",
      color: {
        backGround: "linear-gradient( 135deg, #4A90E2 10%, #9013FE 100%)",
        boxShadow: "0px 10px 20px 0px #4A90E2"
      },
      barValue: 78,
      value: "5,430",
      png: UilUserCheck,
      series: [
        {
          name: "Engagement",
          data: [20, 30, 40, 50, 60, 70, 80],
        },
      ],
    },
    {
      title: "Reach",
      color: {
        backGround: "linear-gradient( 135deg, #E94E77 0%, #D63031 100%)",
        boxShadow: "0px 10px 20px 0px #E94E77",
      },
      barValue: 68,
      value: "8,920",
      png: UilShareAlt,
      series: [
        {
          name: "Reach",
          data: [15, 25, 35, 45, 55, 65, 75],
        },
      ],
    },
    {
      title: "Conversion",
      color: {
        backGround: "linear-gradient( 135deg, #FF6F61 0%, #D83F5C 100%)",
        boxShadow: "0px 10px 20px 0px #FF6F61",
      },
      barValue: 80,
      value: "7,150",
      png: UilChartLine,
      series: [
        {
          name: "Conversion",
          data: [20, 30, 40, 50, 60, 70, 80],
        },
      ],
    },
  ];
  