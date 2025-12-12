import React from 'react';
import { Link } from 'react-router-dom';
import NavbarCempor from '../components/cempor/Navbar';
import FooterCempor from '../components/cempor/Footer';

export default function TentangCempor() {
  const nilaiOrganisasi = [
    {
      icon: 'ri-team-line',
      title: 'Kolaboratif',
      description: 'Membangun sinergi dengan seluruh pemangku kepentingan untuk hasil maksimal'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Inovatif',
      description: 'Terus mengembangkan metode pembinaan sesuai perkembangan zaman'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Integritas',
      description: 'Menjunjung tinggi kejujuran, transparansi, dan akuntabilitas'
    },
    {
      icon: 'ri-heart-3-line',
      title: 'Berdedikasi',
      description: 'Komitmen penuh dalam mengembangkan potensi wirausaha pemuda'
    }
  ];

  const timelineSejarah = [
    {
      year: '2019',
      title: 'Pendirian CEMPOR',
      description: 'Diresmikan sebagai program unggulan Dispora Kalteng untuk pembinaan wirausaha pemuda'
    },
    {
      year: '2020',
      title: 'Program Perdana',
      description: 'Melaksanakan program pembinaan pertama dengan 50 peserta dari seluruh kabupaten/kota'
    },
    {
      year: '2021',
      title: 'Ekspansi Regional',
      description: 'Memperluas jangkauan ke 10 kabupaten dengan sistem pembinaan berjenjang'
    },
    {
      year: '2022',
      title: 'Kolaborasi Nasional',
      description: 'Membangun kemitraan dengan kementerian dan lembaga pembiayaan nasional'
    },
    {
      year: '2023',
      title: 'Digitalisasi Program',
      description: 'Mengembangkan platform online untuk pembelajaran dan pendampingan jarak jauh'
    },
    {
      year: '2024',
      title: 'Transformasi Holistik',
      description: 'Menerapkan sistem pembinaan end-to-end dari pelatihan hingga akses pasar'
    }
  ];

  const pencapaian = [
    { value: '500+', label: 'Peserta Terbina', icon: 'ri-user-line' },
    { value: '150+', label: 'UMKM Tumbuh', icon: 'ri-store-line' },
    { value: '85%', label: 'Tingkat Kepuasan', icon: 'ri-award-line' },
    { value: '25+', label: 'Mentor Berpengalaman', icon: 'ri-user-star-line' }
  ];

  const mitra = [
    { name: 'Dispora Kalteng', logo: 'ri-government-line' },
    { name: 'Dinas Koperasi', logo: 'ri-building-line' },
    { name: 'Kemenpora RI', logo: 'ri-flag-line' },
    { name: 'Universitas', logo: 'ri-graduation-cap-line' },
    { name: 'Bank Kalteng', logo: 'ri-bank-line' },
    { name: 'Asosiasi UMKM', logo: 'ri-community-line' },
  ];

  return (
    <>
      <NavbarCempor />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2a436c] via-[#355485] to-[#4f90c6]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <i className="ri-information-line"></i>
                TENTANG KAMI
              </div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Membangun <span className="text-[#cbdde9]">Masa Depan</span> Wirausaha Pemuda Kalteng
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                CEMPOR (Pusat Pembinaan Wirausaha Pemuda) adalah program unggulan Pemerintah Provinsi Kalimantan Tengah
                yang berkomitmen mengembangkan potensi kewirausahaan pemuda melalui pendekatan holistik dan berkelanjutan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/program"
                  className="px-6 py-3 bg-white text-[#2a436c] rounded-lg font-semibold hover:bg-[#f0f7ff] transition-colors flex items-center gap-2"
                >
                  <i className="ri-book-open-line"></i>
                  Lihat Program
                </Link>
                <Link
                  to="/kontak"
                  className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <i className="ri-customer-service-line"></i>
                  Hubungi Kami
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-1">
                <div className="bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] rounded-xl p-8 text-center">
                  <i className="ri-rocket-2-line text-white text-6xl mb-6"></i>
                  <h3 className="text-2xl font-bold text-white mb-4">Visi Kami</h3>
                  <p className="text-white/90 text-lg">
                    "Menjadi pusat pengembangan wirausaha pemuda terdepan di Kalimantan Tengah
                    yang melahirkan pengusaha muda mandiri dan berdaya saing"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Nilai Organisasi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
              <i className="ri-heart-line"></i>
              NILAI ORGANISASI
            </div>
            <h2 className="text-4xl font-bold text-[#2a436c] mb-6">
              Fondasi <span className="text-[#4f90c6]">Etos Kerja</span> Kami
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi pedoman dalam setiap program dan kegiatan pembinaan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nilaiOrganisasi.map((nilai, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-8 hover:shadow-lg hover:border-[#cbdde9] transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${nilai.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#2a436c] mb-4">{nilai.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{nilai.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sejarah & Pencapaian */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sejarah Timeline */}
            <div>
              <div className="flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-flex border border-[#cbdde9]">
                <i className="ri-time-line"></i>
                PERJALANAN KAMI
              </div>
              <h2 className="text-3xl font-bold text-[#2a436c] mb-8">
                <span className="text-[#4f90c6]">5 Tahun</span> Dedikasi untuk Pemuda Kalteng
              </h2>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4f90c6] via-[#90b6d5] to-[#4f90c6] opacity-50"></div>

                <div className="space-y-8">
                  {timelineSejarah.map((item, index) => (
                    <div key={index} className="relative flex items-start gap-6">
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                          {item.year}
                        </div>
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-xl font-bold text-[#2a436c] mb-2">{item.title}</h3>
                        <p className="text-[#6b7280]">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pencapaian */}
            <div>
              <div className="flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-flex border border-[#cbdde9]">
                <i className="ri-trophy-line"></i>
                PENCAPAIAN
              </div>
              <h2 className="text-3xl font-bold text-[#2a436c] mb-8">
                Dampak yang <span className="text-[#4f90c6]">Terukur</span>
              </h2>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {pencapaian.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-[#e5e7eb] rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white rounded-lg flex items-center justify-center">
                        <i className={`${item.icon} text-xl`}></i>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#2a436c]">{item.value}</div>
                        <div className="text-sm text-[#6b7280] font-medium">{item.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-[#e5e7eb] rounded-xl p-8">
                <h3 className="text-xl font-bold text-[#2a436c] mb-6">Misi Kami</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <p className="text-[#6b7280]">
                      Mengidentifikasi dan mengembangkan potensi kewirausahaan pemuda
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <p className="text-[#6b7280]">
                      Menyediakan pelatihan dan pendampingan komprehensif
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <p className="text-[#6b7280]">
                      Membuka akses permodalan dan jaringan bisnis
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#f0f7ff] text-[#4f90c6] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <p className="text-[#6b7280]">
                      Membangun ekosistem wirausaha pemuda yang berkelanjutan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mitra Strategis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-3 rounded-full text-sm font-semibold mb-4 border border-[#cbdde9]">
              <i className="ri-handshake-line"></i>
              MITRA STRATEGIS
            </div>
            <h2 className="text-4xl font-bold text-[#2a436c] mb-6">
              Bersama <span className="text-[#4f90c6]">Membangun</span> Ekosistem
            </h2>
            <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
              Kolaborasi dengan berbagai institusi untuk memperkuat program pembinaan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mitra.map((item, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] border border-[#e5e7eb] rounded-xl p-6 hover:shadow-lg hover:border-[#cbdde9] transition-all duration-300 group"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4f90c6] to-[#90b6d5] text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <i className={`${item.logo} text-2xl`}></i>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-[#2a436c]">{item.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2a436c] to-[#355485]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
            <i className="ri-rocket-2-line text-white text-4xl"></i>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mengembangkan Potensi Wirausaha Anda?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan pemuda Kalteng yang telah sukses memulai usaha
            melalui program pembinaan CEMPOR
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pendaftaran"
              className="px-8 py-4 bg-white text-[#2a436c] rounded-xl font-semibold hover:bg-[#f0f7ff] transition-colors text-lg flex items-center justify-center gap-3"
            >
              <i className="ri-user-add-line"></i>
              Daftar Sekarang
            </Link>
            <Link
              to="/program"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors text-lg flex items-center justify-center gap-3"
            >
              <i className="ri-information-line"></i>
              Pelajari Program
            </Link>
          </div>
        </div>
      </section>

      <FooterCempor />
    </>
  );
}