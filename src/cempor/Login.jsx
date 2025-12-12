import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const [loginType, setLoginType] = useState('peserta'); // 'peserta' atau 'mentor'
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${loginType === 'peserta' ? 'Peserta' : 'Mentor'} login berhasil!`);
        setFormData({ email: '', password: '', rememberMe: false });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9fafb] via-white to-[#f0f7ff] flex items-center justify-center py-12 px-4">
            <div className="max-w-2xl w-full">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2a436c] to-[#4f90c6] rounded-xl flex items-center justify-center shadow-lg">
                            <i className="ri-rocket-2-line text-white text-2xl"></i>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-[#2a436c] mb-3">
                        Masuk ke <span className="text-[#4f90c6]">CEMPOR</span>
                    </h1>
                    <p className="text-[#6b7280]">
                        Akses dashboard dan fitur eksklusif program
                    </p>
                </div>

                {/* Login Type Selector */}
                <div className="flex mb-8 bg-white rounded-xl p-1 shadow-sm border border-[#e5e7eb]">
                    <button
                        type="button"
                        onClick={() => setLoginType('peserta')}
                        className={`flex-1 py-3.5 rounded-lg font-semibold transition-all ${loginType === 'peserta'
                            ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white shadow-md'
                            : 'text-[#6b7280] hover:text-[#2a436c]'
                            }`}
                    >
                        <i className="ri-user-3-line mr-2"></i>
                        Peserta
                    </button>
                    <button
                        type="button"
                        onClick={() => setLoginType('mentor')}
                        className={`flex-1 py-3.5 rounded-lg font-semibold transition-all ${loginType === 'mentor'
                            ? 'bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white shadow-md'
                            : 'text-[#6b7280] hover:text-[#2a436c]'
                            }`}
                    >
                        <i className="ri-user-star-line mr-2"></i>
                        Mentor
                    </button>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#e5e7eb] p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                    Email {loginType === 'peserta' ? 'Peserta' : 'Mentor'} *
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                        placeholder="contoh@email.com"
                                        required
                                    />
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6b7280]">
                                        <i className="ri-mail-line text-lg"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-[#2a436c] mb-3">
                                    Password *
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full pl-12 pr-4 py-3.5 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                        placeholder="Masukkan password"
                                        required
                                    />
                                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6b7280]">
                                        <i className="ri-lock-line text-lg"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-3 cursor-pointer">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            name="rememberMe"
                                            checked={formData.rememberMe}
                                            onChange={handleChange}
                                            className="sr-only"
                                        />
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${formData.rememberMe
                                            ? 'bg-[#4f90c6] border-[#4f90c6]'
                                            : 'border-[#e5e7eb]'
                                            }`}>
                                            {formData.rememberMe && (
                                                <i className="ri-check-line text-white text-xs"></i>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-sm text-[#6b7280]">Ingat saya</span>
                                </label>
                                <a
                                    href="/forgot-password"
                                    className="text-sm text-[#4f90c6] hover:text-[#2a436c] font-medium transition-colors"
                                >
                                    Lupa password?
                                </a>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-[#2a436c] to-[#4f90c6] text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <i className="ri-login-box-line"></i>
                                    Masuk sebagai {loginType === 'peserta' ? 'Peserta' : 'Mentor'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Footer Links */}
                <div className="mt-8 text-center space-y-4">
                    {loginType === 'peserta' ? (
                        <>
                            <p className="text-[#6b7280] text-sm">
                                Belum punya akun?{' '}
                                <Link to="/pendaftaran" className="text-[#4f90c6] hover:text-[#2a436c] font-semibold transition-colors">
                                    Daftar sebagai Peserta
                                </Link>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-[#6b7280] text-sm">
                                Mentor baru?{' '}
                                <a href="#" className="text-[#4f90c6] hover:text-[#2a436c] font-semibold transition-colors">
                                    Daftar sebagai Mentor
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}