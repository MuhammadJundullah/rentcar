function Navbar() {
  return (
    <div className="py-5 bg-slate-100">
      <div className="sm:hidden mx-10">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Beranda</option>
          <option>Unit Kendaraan</option>
          <option>Paket Tour</option>
          <option select>Reservasi Online</option>
          <option>Contact Us</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex gap-10 justify-center" aria-label="Tabs">
          <img
            src="https://www.carjet.com/cdn/cache7/img/logos/w/cjt/logo_head.svg"
            className="w-20"
            alt="jet"
          />
          <a
            href="/"
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Beranda
          </a>

          <a
            href="/"
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Unit Kendaraan
          </a>

          <a
            href="/"
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Paket Tour
          </a>

          <a
            href="/"
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Reservasi Online
          </a>

          <a
            href="/"
            className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
