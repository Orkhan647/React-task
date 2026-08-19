function Card({ name, city, country, phone, email, photo }) {
  return (
    <div className="group w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-2/5 min-h-80 bg-linear-to-br from-gray-950 via-gray-800 to-red-900 flex items-center justify-center p-8 relative overflow-hidden">
          <div className="absolute w-52 h-52 bg-red-600/10 rounded-full -top-24 -left-24"></div>

          <div className="absolute w-44 h-44 bg-red-500/10 rounded-full -bottom-20 -right-20"></div>

          <div className="relative z-10">
            <div className="absolute inset-0 bg-red-600/30 rounded-full blur-2xl scale-110"></div>

            <img
              src={photo}
              alt={name}
              className="relative w-66 h-66 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>

        <div className="flex-1 p-7">
          {/* Name */}
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>

          <p className="text-sm text-red-600 font-semibold mt-1">
            Frontend Developer
          </p>

          {/* Divider */}
          <div className="w-full h-1 bg-linear-to-r from-red-600 to-transparent rounded-full my-4"></div>

          {/* Information */}
          <div className="space-y-2.5">
            {/* Country */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-3 hover:bg-red-100 hover:translate-x-1 transition-all duration-300">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-red-200 text-xl">
                🌍
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase font-semibold">
                  Country
                </p>

                <p className="text-gray-800 font-medium truncate">{country}</p>
              </div>
            </div>

            {/* City */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-3 hover:bg-red-100 hover:translate-x-1 transition-all duration-300">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-red-200 text-xl">
                📍
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase font-semibold">
                  City
                </p>

                <p className="text-gray-800 font-medium truncate">{city}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-3 hover:bg-red-100 hover:translate-x-1 transition-all duration-300">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-red-200 text-xl">
                📞
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase font-semibold">
                  Phone
                </p>

                <p className="text-gray-800 font-medium truncate">{phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-xl p-3 hover:bg-red-100 hover:translate-x-1 transition-all duration-300">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg bg-red-200 text-xl">
                📫
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-400 uppercase font-semibold">
                  Email
                </p>

                <p className="text-gray-800 font-medium truncate">{email}</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-5 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-red-700 hover:shadow-lg transition-all duration-300">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
