"use client";

export default function ContactInfo() {
  return (
    <section
      id="Contact"
      className="w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-16">

        {/* FORM */}
        <form
          className="flex-1 bg-[#0f1629]/80 p-10 rounded-2xl shadow-lg border border-cyan-500/20 space-y-6 backdrop-blur-md transition"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            İletişim
          </h2>

          {/* Ad Soyad */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-300">
              Ad Soyad
            </label>
            <input
              type="text"
              required
              placeholder="Adınız ve soyadınız"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1322]/90 border border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-300">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="email@ornek.com"
              className="w-full px-4 py-3 rounded-lg bg-[#0d1322]/90 border border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Mesaj */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-300">
              Mesaj
            </label>
            <textarea
              rows={6}
              required
              placeholder="Mesajınızı yazınız"
              className="w-full px-4 py-3 rounded-lg resize-none bg-[#0d1322]/90 border border-cyan-500/30 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-cyan-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition"
          >
            Gönder
          </button>
        </form>

        {/* CONTACT INFO */}
        <div
          className="flex-1 bg-[#0f1629]/40 rounded-2xl p-10 shadow-lg border border-cyan-500/20 text-gray-200 space-y-10 backdrop-blur-md"
        >
          <h3 className="text-3xl font-semibold pb-3 max-w-max text-cyan-300">
            İletişim Bilgileri
          </h3>

          {/* Adres */}
          <div>
            <p className="font-semibold border-b border-cyan-500/40 max-w-max pb-1 text-cyan-300">
              Adres
            </p>
            <p className="text-gray-300 mt-1">
              Uşak / Merkez, Türkiye
            </p>
          </div>

          {/* Telefon */}
          <div>
            <p className="font-semibold border-b border-cyan-500/40 max-w-max pb-1 text-cyan-300">
              Telefon
            </p>
            <p className="text-gray-300 mt-1">
              +90 546 727 36 69
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="font-semibold border-b border-cyan-500/40 max-w-max pb-1 text-cyan-300">
              Email
            </p>
            <p className="text-gray-300 mt-1">
              ozkannprofessional@gmail.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
