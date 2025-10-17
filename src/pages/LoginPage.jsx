import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});

const LoginPage = () => {
    const history = useHistory();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const previousPage = location.state?.from || '/';

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const rememberMe = watch('rememberMe');

    const onSubmit = async (data) => {
        setIsLoading(true);
        setSubmitMessage('');
        
        try {
            const loginData = {
                email: data.email,
                password: data.password
            };

            console.log('Gönderilen veri:', loginData);
            
            const response = await api.post('/login', loginData);
            
            console.log('API Response:', response.data);
            if (response.data) {
                const token = response.data.token || response.data.access_token;
                const user = response.data.user || response.data;
                
                if (token) {
                    if (data.rememberMe) {
                        localStorage.setItem('token', token);
                        localStorage.setItem('user', JSON.stringify(user));
                    } else {
                        sessionStorage.setItem('token', token);
                        sessionStorage.setItem('user', JSON.stringify(user));
                    }
                    
                    setSubmitMessage('Giriş başarılı! Yönlendiriliyorsunuz...');
                    setIsSuccess(true);
                    toast.success('Giriş başarılı!');
                    
                    console.log('Previous page:', previousPage);
                    console.log('Redirecting to home page');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1000);
                } else {
                    throw new Error('Token alınamadı');
                }
            } else {
                throw new Error('API response boş');
            }
            
        } catch (error) {
            console.error('Giriş hatası:', error);
            
            let errorMessage = 'Giriş sırasında bir hata oluştu. Lütfen tekrar deneyin.';
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
            toast.error(errorMessage);
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
            <div className={`bg-white w-96 max-w-md lg:w-[500px] rounded-2xl lg:rounded-r-2xl lg:rounded-l-none shadow-xl p-4 sm:items-center sm:justify-center sm:p-6 lg:p-8 min-h-[600px] lg:h-[900px]`}>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8 sm:mt-12 lg:mt-28 ">
                    Login Form
                </h1>
                <div className="flex bg-gray-100 rounded-lg p-1 mb-6 sm:mb-8">
                    <button
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-medium transition-colors h-10 sm:h-12 ${
                            activeTab === 'login'
                                ? 'bg-[#23A6F0] text-white shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => history.push('/signup')}
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
                                required: 'Şifre zorunludur'
                            })}
                            type="password"
                            className="w-96 h-10 sm:h-12 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            placeholder="Password"
                        />
                        {errors.password && (
                            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex items-center justify-center">
                        <input
                            {...register('rememberMe')}
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 block text-xs sm:text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-72 h-10 sm:h-12 flex justify-center items-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-xs sm:text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white mr-2"></div>
                                    <span className="text-xs sm:text-sm">Logging in...</span>
                                </div>
                            ) : (
                                'Login'
                            )}
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-xs sm:text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                                Signup
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default LoginPage;
