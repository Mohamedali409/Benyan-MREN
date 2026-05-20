// const data = [
//   {
//     id: 1,
//     icon: "fa-hotel",
//     number: 120,
//     name: "project",
//   },
//   {
//     id: 2,
//     icon: "fa-hotel",
//     number: 120,
//     name: "project",
//   },
//   {
//     id: 3,
//     icon: "fa-hotel",
//     number: 120,
//     name: "project",
//   },
//   {
//     id: 4,
//     icon: "fa-hotel",
//     number: 120,
//     name: "project",
//   },

import Status from "../../components/Dashborad/Status/Status";

// ];
const HomeDashboard = () => {
  return (
    // <>
    //   <div class="container">
    //     <div class="row mt-3">
    //       {data.map((item) => (
    //         <div key={item.id} class="col-md-3">
    //           <div className="card bg- mt-3">
    //             <div className="card-body d-flex align-items-center justify-content-around bg-sacandry rounded-1">
    //               <i class={`fa-solid ${item.icon}`}></i>
    //               <div className="">
    //                 <h3>{item.number}</h3>
    //                 <h4>{item.name}</h4>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </>

    <>
      <Status />
    </>
  );
};

export default HomeDashboard;
