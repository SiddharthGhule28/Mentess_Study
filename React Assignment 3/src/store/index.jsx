import { createStore } from "redux";
const allbookings = [
  {
    custname: "Aniket",
    custage: 23,
    hotel: "Blue Diamond",
    tableno: "2",
  },
  {
    custname: "Gitesh",
    custage: 20,
    hotel: "Conrad",
    tableno: "1",
  },
  {
    custname: "Abhi",
    custage: 25,
    hotel: "Raddison blu",
    tableno: "3",
  },
  {
    custname: "Ram",
    custage: 22,
    hotel: "Blue Diamond",
    tableno: "2",
  },
  {
    custname: "Karan",
    custage: 23,
    hotel: "Conrad",
    tableno: "2",
  },
];
const adminloginlst = [
  {
    fullname: "Karan",
    mobileno: "9879968969",
    email: "karan@gmail.com",
    age: "30",
    password: "12345678",
  },
];
const userloginlst = [
  {
    fullname: "Rohan",
    mobileno: "9879968969",
    email: "Rohan@gmail.com",
    age: "30",
    password: "12345678",
  },
  {
    fullname: "Niranjan",
    mobileno: "9879968969",
    email: "Nir@gmail.com",
    age: "22",
    password: "12345678",
  },
  {
    fullname: "Gitesh",
    mobileno: "9879968969",
    email: "gitesh@gmail.com",
    age: "18",
    password: "12345678",
  },
  {
    fullname: "Aniket",
    mobileno: "9879968969",
    email: "anya@gmail.com",
    age: "25",
    password: "12345678",
  },
  {
    fullname: "Ram",
    mobileno: "9879968969",
    email: "Ram@gmail.com",
    age: "23",
    password: "12345678",
  },
];

const hotels = [
  {
    Id: 1,
    Name: "Conrad",
    Location: "Pune",
    Price: 500,
  },
  {
    Id: 2,
    Name: "Blue Diamond",
    Location: "Pimpri",
    Price: 800,
  },
  {
    Id: 3,
    Name: "JW Marriot",
    Location: "Chinchwad",
    Price: 1000,
  },
  {
    Id: 4,
    Name: "Raddison Blu",
    Location: "Mumbai",
    Price: 400,
  },
  {
    Id: 5,
    Name: "Della and Adventures",
    Location: "Lonavala",
    Price: 2000,
  },
  {
    Id: 4,
    Name: "Oberoi",
    Location: "Mumbai",
    Price: 1500,
  },
];

const userbookinglist = [];

const reduceFunction = (
  state = {
    allbookings: allbookings,
    userloginlst: userloginlst,
    hotels: hotels,
    adminloginlst: adminloginlst,
  },
  action
) => {
  if (action.type === "update") {
    const newArray = [...state.allbookings, action.value];
    return {
      allbookings: newArray,
      userloginlst: state.userloginlst,
      hotels: state.hotels,
      adminloginlst: state.adminloginlst,
    };
  }
  if (action.type === "userloginlst") {
    const newArray = [...state.userloginlst, action.value];

    return {
      allbookings: state.allbookings,
      userloginlst: newArray,
      hotels: state.hotels,
      adminloginlst: state.adminloginlst,
    };
  }
  if (action.type === "hotels") {
    const newArray = [...state.hotels, action.value];

    return {
      allbookings: state.allbookings,
      userloginlst: state.userloginlst,
      hotels: newArray,
      adminloginlst: state.adminloginlst,
    };
  }
  if (action.type === "userbookinglist") {
    const newArray = state.userbookinglist.filter((d, i) => {
      return i !== action.value;
    });
    return {
      allbookings: newArray,
      userloginlst: state.userloginlst,
      hotels: state.hotels,
      adminloginlst: state.adminloginlst,
    };
  }
  if (action.type === "adminloginlist") {
    const newArray = [...state.adminloginlst, action.value];
    return {
      allbookings: state.allbookings,
      userloginlst: state.userloginlst,
      hotels: state.hotels,
      adminloginlst: newArray,
    };
  }
  return state;
};

const store = createStore(reduceFunction);
export default store;
