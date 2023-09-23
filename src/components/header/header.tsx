function Header() {

    function openMenu()
    {   
        const element = document.getElementById('mobile-menu');
        element?.classList.toggle('hidden');
    }

  return (
    <>
        {/* <!-- Navbar --> */}
    <nav className="p-4 shadow-md">
        <div className="container mx-auto flex justify-around items-center">
            {/* <!-- Logo --> */}
            <a href="#" className="text-2xl font-semibold ">Expense Tracker</a>

            {/* <!-- Desktop Navigation --> */}
            <ul className="hidden md:flex space-x-4">
                <li>
                    <a href="#" className=" hover:font-semibold">Dashboard</a>
                </li>
                <li>
                    <a href="#" className=" hover:font-semibold">Expenses</a>
                </li>
                <li>
                    <a href="#" className=" hover:font-semibold">Categories</a>
                </li>
                <li>
                    <a href="#" className=" hover:font-semibold">Reports</a>
                </li>
            </ul>

            {/* <!-- Mobile Navigation (Hamburger Menu) --> */}
            <div className="md:hidden">
                <button id="mobile-menu-toggle" onClick={openMenu} className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    {/* <!-- Mobile Menu (Hidden by default) --> */}
    <div id="mobile-menu" className="hidden md:hidden bg-blue-500">
        <ul className="p-4 space-y-4">
            <li>
                <a href="#" className="block  hover:underline">Home</a>
            </li>
            <li>
                <a href="#" className="block  hover:underline">About</a>
            </li>
            <li>
                <a href="#" className="block  hover:underline">Services</a>
            </li>
            <li>
                <a href="#" className="block  hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Header;