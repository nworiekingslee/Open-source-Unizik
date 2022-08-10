const SideBar = () => {
  return (
    <div className="md:w-96 p-4  w-full h-auto text-left text-text-secondary">
      <p class="font-semibold mb-3">Your to-do list</p>

      <ul className="ml-6 sm:w-52" style={{ listStyleType: "disc" }}>
        <li className="mb-2"> Visit and fork the repo</li>
        <li className="mb-2"> Clone the repository and create a branch</li>
        <li className="mb-2"> Add your details using this guide</li>
        <li className="mb-2"> Add your details using this guide</li>
        <li className="mb-2"> Add your details in ./uils/members.js file</li>
      </ul>
      {/* <span>Visit and fork the repo</span> */}
    </div>
  );
};

export default SideBar;
