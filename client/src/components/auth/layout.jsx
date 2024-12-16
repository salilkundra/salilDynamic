import { Outlet } from "react-router-dom";

function AuthLayout() {
  const imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url('/login imagee.jpg')`,
    height: "190vh",
    // width:"220vh",
    marginTop:"-90vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    // <div className="flex min-h-screen w-full">
    //   <div className="hidden lg:flex items-center justify-center bg-green-500 w-1/2 px-12">
    //     <div className="max-w-md space-y-6 text-center text-primary-foreground">
    //       <h1 className="text-4xl font-extrabold tracking-tight">
    //         Welcome to ECommerce Shopping 
    //       </h1>
    //     </div>
    //   </div>
    //   <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    //     <Outlet />
    //   </div>
    // </div>

   <div>
    {/* <img src="/login imagee.jpg" alt="image" className="h-lvh w-lvw" />  */}
    <div style={imageStyle}>
    <div className=" mt-[590px] bg-neutral-500  h-[420px] w-[450px] border-2 border-slate-500 rounded-[12px] px-8 py-6">
      <Outlet />
    </div>
  
    </div>
    
    </div>

  );
}

export default AuthLayout;


