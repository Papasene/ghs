import NavBarItem from "./navbarItem";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md px-4">
      <div className="flex justify-between max-w-7xl sm:mx-auto items-center">
        <div className="flex justify-start dark:bg-white bg-amber-100 lg:text-lg py-2">
          <NavBarItem title="ACCEUIL" param="fetchAcceuil" />
          <NavBarItem title="SERVICES" param="fetchServices" />
          <NavBarItem title="POPULAIRES" param="fetchPupulaires" />
          <NavBarItem title="INFORMATIONS" param="fetchInformations" />
          <NavBarItem title="CONTACTS" param="fetchContacts" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
