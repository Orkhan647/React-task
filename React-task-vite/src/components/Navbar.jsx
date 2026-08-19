function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold cursor-pointer">
          React <span className="text-red-800">App</span>
        </h1>

        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#"
              className="inline-block hover:text-red-800 hover:scale-125 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-block hover:text-red-800 hover:scale-125 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-block hover:text-red-800 hover:scale-125 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-block hover:text-red-800 hover:scale-125 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;