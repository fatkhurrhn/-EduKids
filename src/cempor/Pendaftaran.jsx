import React, { useState } from 'react';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        telepon: '',
        alamat: '',
        pendidikan: '',
        pekerjaan: '',
        program: '',
        motivasi: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda.');
        setFormData({
            nama: '', email: '', telepon: '', alamat: '',
            pendidikan: '', pekerjaan: '', program: '', motivasi: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f9fafb] py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-[#f0f7ff] text-[#4f90c6] px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        <i className="ri-user-add-line"></i>
                        FORMULIR PENDAFTARAN
                    </div>
                    <h1 className="text-4xl font-bold text-[#2a436c] mb-4">
                        Daftar Program <span className="text-[#4f90c6]">CEMPOR</span>
                    </h1>
                    <p className="text-xl text-[#6b7280]">
                        Isi formulir berikut untuk bergabung dengan program pembinaan wirausaha pemuda
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-8">
                            {/* Nama */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                    placeholder="Masukkan nama lengkap"
                                    required
                                />
                            </div>

                            {/* Email & Telepon */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                        placeholder="contoh@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                        Nomor WhatsApp <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="telepon"
                                        value={formData.telepon}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                        placeholder="0812-3456-7890"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                    Alamat Lengkap
                                </label>
                                <textarea
                                    name="alamat"
                                    value={formData.alamat}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all resize-none"
                                    placeholder="Alamat rumah/kantor"
                                ></textarea>
                            </div>

                            {/* Pendidikan & Pekerjaan */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                        Pendidikan Terakhir
                                    </label>
                                    <select
                                        name="pendidikan"
                                        value={formData.pendidikan}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                                    >
                                        <option value="">Pilih pendidikan</option>
                                        <option value="SMA/SMK">SMA/SMK</option>
                                        <option value="Diploma">Diploma</option>
                                        <option value="Sarjana">Sarjana (S1)</option>
                                        <option value="Magister">Magister (S2)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                        Pekerjaan Saat Ini
                                    </label>
                                    <select
                                        name="pekerjaan"
                                        value={formData.pekerjaan}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                                    >
                                        <option value="">Pilih pekerjaan</option>
                                        <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
                                        <option value="Karyawan Swasta">Karyawan Swasta</option>
                                        <option value="PNS">PNS</option>
                                        <option value="Wirausaha">Wirausaha</option>
                                        <option value="Fresh Graduate">Fresh Graduate</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>
                            </div>

                            {/* Program */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                    Program yang Dipilih <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                                    required
                                >
                                    <option value="">Pilih program</option>
                                    <option value="dasar">🎯 Tingkat Dasar (Pemula)</option>
                                    <option value="menengah">🚀 Tingkat Menengah (Berkembang)</option>
                                    <option value="lanjut">🏆 Tingkat Lanjut (Scale-up)</option>
                                </select>
                            </div>

                            {/* Motivasi */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                    Motivasi & Tujuan <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="motivasi"
                                    value={formData.motivasi}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all resize-none"
                                    placeholder="Ceritakan mengapa Anda ingin bergabung dan tujuan mengikuti program ini..."
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <i className="ri-send-plane-fill"></i>
                                    Kirim Pendaftaran
                                </button>
                            </div>
                        </div>
                    </form>

                    {/* Info */}
                    <div className="mt-8 pt-8 border-t border-[#e5e7eb]">
                        <div className="flex items-center justify-center gap-2 text-sm text-[#6b7280]">
                            <i className="ri-time-line"></i>
                            <span>Konfirmasi pendaftaran maksimal 1x24 jam via WhatsApp</span>
                        </div>
                    </div>
                </div>

                {/* Quick Info */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="bg-[#f0f7ff] border border-[#cbdde9] rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-[#2a436c]">Gratis</div>
                        <div className="text-xs text-[#6b7280]">Pendaftaran</div>
                    </div>
                    <div className="bg-[#f0f7ff] border border-[#cbdde9] rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-[#2a436c]">24 Jam</div>
                        <div className="text-xs text-[#6b7280]">Konfirmasi</div>
                    </div>
                    <div className="bg-[#f0f7ff] border border-[#cbdde9] rounded-xl p-4 text-center">
                        <div className="text-lg font-bold text-[#2a436c]">2025</div>
                        <div className="text-xs text-[#6b7280]">Batch Terbaru</div>
                    </div>
                </div>
            </div>
        </div>
    );
}