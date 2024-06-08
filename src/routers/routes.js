const routes = {
  landing: "/",
  login: "/login",
  register: "/register",
  dashboard: {
    home: "/dashboard",
    settings: "/dashboard/settings",
    shifts: "/dashboard/shifts",
    shift: (shiftId)=> shiftId ? `"/dashboard/shift/${shiftId}` : "/dashboard/shift/:sid",
    reports: "/dashboard/reports",
    
    admin: "/dashboard/admin" ,
   
  },
};

export default routes;
