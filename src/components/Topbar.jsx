import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export default function Topbar() {
    const [landingForm, setLandingForm] = useState(false);
    const [countdown, setCountdown] = useState(() => {
        const savedCountdown = localStorage.getItem('countdown');
        return savedCountdown !== null ? parseInt(savedCountdown) : 10 * 60;
    });

    useEffect(() => {
        let interval = null;
        if (localStorage.getItem('companyName')) {
            if (countdown > 0) {
                interval = setInterval(() => {
                    setCountdown(prevCountdown => prevCountdown - 1);
                    setLandingForm(true);
                }, 1000);
            }
        } else {
            localStorage.removeItem('countdown');
            setLandingForm(false);
        }
        return () => clearInterval(interval);
    }, [countdown]);

    useEffect(() => {
        if (localStorage.getItem('companyName')) {
            if (countdown === 0) {
                localStorage.removeItem('countdown');
                setLandingForm(false);
            } else {
                localStorage.setItem('countdown', countdown.toString());
            }
        }
    }, [countdown]);

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const {t} = useTranslation();

    return (
        <>
            {landingForm &&
                <div className='flex items-center justify-center  gap-x-6 border ring-1 rounded-full py-3.5 px-6 sm:px-3.5 mb-12'>
                    <div className="block">
                        <p className="text-2xl leading-6 text-white font-semibold" >
                            {t('topbar_text1')} <span className='font-bold text-blue-600'>"{localStorage.getItem('companyName')}"</span> {t('topbar_text2')}
                        </p>
                        <p className="text-2xl leading-6 text-white font-semibold text-center ">{t('topbar_text3')} <span className='font-bold text-blue-600'>"{localStorage.getItem('companyName')}"</span></p>
                        <p className='font-bold text-center text-white text-2xl'> {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
                    </div>
                </div>
            }
        </>
    )
}