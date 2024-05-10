"use client";
import React, { useEffect, useState } from "react";

const Chat = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])

    return (
        <div className="w-[60%] mx-auto space-y-5">
            <div className="flex items-center space-x-3">
                <p>Avatar</p>
                <p>
                    Create a list of power phrases for my resume. Here’s what I want to say: Software engineer, tech leader for a team of 10 that increases 50% revenue.
                </p>
            </div>
            <div className="flex items-center space-x-3">
                <p>Icon</p>
                {loading ? (
                    <div>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem, maxime porro similique laborum autem dolorem alias
                        totam explicabo sapiente provident laudantium quam sed nemo accusamus
                        ullam assumenda perferendis ratione eveniet dolor quas a est,
                        distinctio vero. Amet provident consequuntur labore voluptatibus ullam
                        beatae delectus, laudantium placeat ut asperiores quaerat ratione.
                    </p>
                )}

            </div>
        </div>
    );
};

export default Chat;
