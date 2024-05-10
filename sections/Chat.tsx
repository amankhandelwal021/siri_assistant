"use client";
import React, { useEffect, useState } from "react";

const Chat = ({ chat }:any) => {

    const [loading, setLoading] = useState(true);

    const speakText = (text: string, pitch: number, rate: number, volume: number) => {
        if ('speechSynthesis' in window) {
            var utterance = new SpeechSynthesisUtterance(text);

            utterance.pitch = pitch;
            utterance.rate = rate;
            utterance.volume = volume;

            window.speechSynthesis.speak(utterance);
        } else {
            console.log('Speech synthesis not supported');
        }
    };


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            if (!loading && chat.response && chat.isLive) {
                speakText(chat.response, 1.5, 1.2, 1.0);
            }
        }, 2500);
    }, [loading, chat.response])

    return (
        <div className="w-[60%] mx-auto space-y-2">
            <div className="flex items-start space-x-3">
                <p>Avatar</p>
                <p>
                    {chat.prompt}
                </p>
            </div>
            <div className="flex items-start space-x-3">
                <p>Icon</p>
                {loading && chat.isLive ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <p>
                        {chat.response}
                    </p>
                )}

            </div>
        </div>
    );
};

export default Chat;
