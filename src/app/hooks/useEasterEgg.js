'use client';

import { useEffect } from 'react';

export const useEasterEgg = () => {
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentLang = document.documentElement.lang;  // Get the current lang attribute
            console.log('Current language:', currentLang);

            if (currentLang && currentLang !== 'en') {  // Check if the language is not English
                alert('Google Translate has changed the language!');
                const subtitle = document.querySelector('.header_container--subtitle');
                    if (subtitle && subtitle.innerText !== 'Veni, vedi, vici 🏛️🍷') {
                        // Only change if the text hasn't been modified already
                        subtitle.innerHTML = `<span translate="no">Veni, vedi, vici 🏛️🍷</span>`;
                    }

                const contactButton = document.querySelector('.header_container--subtitle');
            }
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

        return () => observer.disconnect(); // Clean up observer on component unmount
    }, []);
};