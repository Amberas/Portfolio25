"use client";

import { useEffect } from 'react';

export const useEasterEgg = () => {
    useEffect(() => {
        const targetNode = document.body; // Observe the entire body
        const config = { childList: true, subtree: true };

        const callback = (mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    console.log("translation detected");
                    // Replace specific text when detected
                    document.querySelectorAll('.header_container--title').forEach((el) => {
                        if (el.innerText.includes('Expected Translated Text')) {
                            el.innerText = 'Veni, vedi, vici 🏛️🍷';
                        }
                    });
                }
            });
        };

        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        return () => {
            observer.disconnect(); // Clean up observer on component unmount
        };
    }, []);
};