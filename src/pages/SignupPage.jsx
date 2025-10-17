import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 15000, // Timeout süresini 15 saniyeye çıkardım
    headers: {
        'Content-Type': 'application/json'
    }
});

const SignupPage = () => {
    const history = useHistory();
    const location = useLocation();
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingRoles, setIsLoadingRoles] = useState(true);
    const [submitMessage, setSubmitMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState('signup');
    const previousPage = location.state?.from || document.referrer || '/';

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm();

    const selectedRole = watch('role_id');
    const termsAccepted = watch('terms');

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                setIsLoadingRoles(true);
                const response = await api.get('/roles');
                setRoles(response.data);
                
                const customerRole = response.data.find(role => role.code === 'customer');
                if (customerRole) {
                    setValue('role_id', customerRole.id.toString());
                }
            } catch (error) {
                console.error('Roller yüklenirken hata:', error);
                
                // Fallback roller - API çalışmazsa varsayılan roller
                const fallbackRoles = [
                    { id: 1, name: 'Customer', code: 'customer' },
                    { id: 2, name: 'Seller', code: 'seller' }
                ];
                setRoles(fallbackRoles);
                setValue('role_id', '1'); // Customer'ı varsayılan olarak seç
                
                setSubmitMessage('API bağlantısında sorun var. Varsayılan roller yüklendi.');
                setIsSuccess(false);
            } finally {
                setIsLoadingRoles(false);
            }
        };
        fetchRoles();
    }, [setValue]);

    const onSubmit = async (data) => {
        setIsLoading(true);
        setSubmitMessage('');
        
        try {
            const formattedData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: parseInt(data.role_id)
            };

            delete data.confirmPassword;
            delete data.terms;

            if (data.role_id === '2' && data.store) {
                formattedData.store = {
                    name: data.store.name,
                    phone: data.store.phone,
                    tax_no: data.store.tax_no,
                    bank_account: data.store.bank_account
                };
            }

            console.log('Gönderilen veri:', formattedData);
            
            const response = await api.post('/signup', formattedData);
            
            setSubmitMessage('You need to click link in email to activate your account!');
            setIsSuccess(true);
            
            setTimeout(() => {
                if (previousPage.includes('/signup') || previousPage === window.location.origin) {
                    history.push('/');
                } else {
                    window.location.href = previousPage;
                }
            }, 2000);
            
        } catch (error) {
            console.error('Kayıt hatası:', error);
            
            let errorMessage = 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.';
            
            // Timeout hatası için özel mesaj
            if (error.code === 'ECONNABORTED') {
                errorMessage = 'İstek zaman aşımına uğradı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.';
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            } else if (error.response?.data?.error) {
                errorMessage = error.response.data.error;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            setSubmitMessage(errorMessage);
            setIsSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-[#23A6F0] flex flex-col lg:flex-row items-center justify-center p-2 sm:p-4 text-center">
            <div className='hidden lg:block bg-[#23A6F0] w-full lg:w-[500px] h-[400px] lg:h-[900px] shadow-xl rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none text-2xl lg:text-3xl space-y-6 lg:space-y-10 text-white font-semibold'>
                <h1 className='mt-20 lg:mt-40 bg-gradient-to-l from-gray-500 text-3xl lg:text-5xl'>Bandage Page</h1>
                <h1 className='bg-gradient-to-l from-gray-400 text-xl lg:text-3xl'>2025 Summer Creations</h1>
                <h1 className='bg-gradient-to-l from-gray-300 text-xl lg:text-3xl'>2025 Winter Creations</h1>
                <h1 className='bg-gradient-to-l from-gray-300 text-xl lg:text-3xl'>New Collections</h1>
                <img src="src/assets/img/teamimg/team4.jpg" alt="img" className='rounded-full h-48 w-48 lg:h-72 lg:w-72 mx-auto lg:ml-25'/>
            </div>
            <div className={`bg-white w-96 max-w-md lg:w-[500px] rounded-2xl lg:rounded-r-2xl lg:rounded-l-none shadow-xl p-4 sm:items-center sm:justify-center sm:p-6 lg:p-8 ${selectedRole === 2 ? 'min-h-[1400px] lg:h-[1500px]' : 'min-h-[800px] lg:h-[900px]'}`}>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8 sm:mt-12 lg:mt-28 ">
                    Signup Form
                </h1>
                <div className="flex bg-gray-100 rounded-lg p-1 mb-6 sm:mb-8">
                    <button
                        onClick={() => history.push('/login')}
                        className={`flex-1 py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-medium transition-colors h-10 sm:h-12 ${
                            activeTab === 'login'
                                ? 'bg-[#23A6F0] text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setActiveTab('signup')}
                        className={`flex-1 py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-medium transition-colors h-10 sm:h-12 ${
                            activeTab === 'signup'
                                ? 'bg-blue-600 text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Signup
                    </button>
                </div>

                <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            {...register('name', {
                                required: 'Ad Soyad zorunludur',
                                minLength: {
                                    value: 3,
                                    message: 'En az 3 karakter giriniz!'
                                }
                            })}
                            type="text"
                            className="w-96 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            placeholder="Name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register('email', {
                                required: 'E-posta zorunludur',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Geçerli bir e-posta adresi girin'
                                }
                            })}
                            type="email"
                            className="w-96 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            placeholder="Email Address"
                        />
                        {errors.email && (
                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register('password', {
                                required: 'Şifre zorunludur',
                                minLength: {
                                    value: 8,
                                    message: 'Şifre en az 8 karakter olmalıdır'
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                                    message: 'Şifre en az 1 büyük harf, 1 küçük harf, 1 sayı ve 1 özel karakter içermelidir'
                                }
                            })}
                            type="password"
                            className="w-96 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    <div>
                        <input
                            {...register('confirmPassword', {
                                required: 'Şifre tekrarı zorunludur',
                                validate: value => value === watch('password') || 'Şifreler eşleşmiyor'
                            })}
                            type="password"
                            className="w-96 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            placeholder="Confirm password"
                        />
                        {errors.confirmPassword && (
                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    <div>
                        <select
                            {...register('role_id', { required: 'Rol seçimi zorunludur' })}
                            className="w-96 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            disabled={isLoadingRoles}
                        >
                            {isLoadingRoles ? (
                                <option value="">Roller yükleniyor...</option>
                            ) : (
                                roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))
                            )}
                        </select>
                        {errors.role_id && (
                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.role_id.message}</p>
                        )}
                    </div>

                    {selectedRole && selectedRole.toString() === '2' && (
                        <div className="space-y-3 sm:space-y-4 border-t pt-3 sm:pt-4">
                            <h3 className="text-base sm:text-lg font-medium text-gray-900">Store Information</h3>
                            <div>
                                <input
                                    {...register('store.name', {
                                        required: selectedRole === '2' ? 'Mağaza adı zorunludur' : false,
                                        minLength: {
                                            value: 3,
                                            message: 'Mağaza adı en az 3 karakter olmalıdır'
                                        }
                                    })}
                                    type="text"
                                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Store name"
                                />
                                {errors.store?.name && (
                                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.store.name.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register('store.phone', {
                                        required: selectedRole === '2' ? 'Telefon zorunludur' : false,
                                        pattern: {
                                            value: /^(\+90|0)?[5][0-9]{9}$/,
                                            message: 'Geçerli bir Türkiye telefon numarası girin'
                                        }
                                    })}
                                    type="tel"
                                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Phone number"
                                />
                                {errors.store?.phone && (
                                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.store.phone.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register('store.tax_no', {
                                        required: selectedRole === '2' ? 'Vergi numarası zorunludur' : false,
                                        pattern: {
                                            value: /^T\d{4}V\d{6}$/,
                                            message: 'Vergi numarası TXXXXVXXXXXX formatında olmalıdır'
                                        }
                                    })}
                                    type="text"
                                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Tax ID (TXXXXVXXXXXX)"
                                />
                                {errors.store?.tax_no && (
                                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.store.tax_no.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    {...register('store.bank_account', {
                                        required: selectedRole === '2' ? 'Banka hesabı zorunludur' : false,
                                        pattern: {
                                            value: /^TR\d{24}$/,
                                            message: 'Geçerli bir IBAN adresi girin (TR ile başlamalı)'
                                        }
                                    })}
                                    type="text"
                                    className="w-full h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                                    placeholder="Bank Account (IBAN)"
                                />
                                {errors.store?.bank_account && (
                                    <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.store.bank_account.message}</p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex items-center justify-center">
                        <input
                            {...register('terms', { required: 'Şartları kabul etmelisiniz' })}
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-xs sm:text-sm text-gray-900">
                            I accept all terms & conditions
                        </label>
                    </div>
                    {errors.terms && (
                        <p className="mt-1 text-xs sm:text-sm text-red-600 text-center">{errors.terms.message}</p>
                    )}

                    {submitMessage && (
                        <div className={`p-3 sm:p-4 rounded-md border-2 ${isSuccess ? 'bg-yellow-50 text-yellow-800 border-yellow-300' : 'bg-red-50 text-red-800 border-red-300'}`}>
                            <div className="flex items-center">
                                {isSuccess ? (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                )}
                                <span className="font-semibold text-xs sm:text-sm">{submitMessage}</span>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isLoading || !termsAccepted}
                            className="w-72 h-10 sm:h-12 flex justify-center items-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                                    <span className="text-xs sm:text-sm">Signing up...</span>
                                </div>
                            ) : (
                                'Signup'
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-xs sm:text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;