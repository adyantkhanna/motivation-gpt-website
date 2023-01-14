'use client';
import React, { Component } from "react";

const URL = 'http://127.0.0.1:4000/openai';

const getQuote = async () => {
    const response = await fetch(URL);

    const body = await response.json();

    console.log(body.Response)

    return body.Response
}

function Generate() {
    const [quote, setQuote] = React.useState([]);
    const onClickHandler = async () => {
        const quote = await getQuote();
        setQuote(quote);
    }
    
        return (
            <section className='sm:pl-16 pl-6 pr-6 sm:pr-16 min-h-screen'>
                {/* <div className="mt-10">
                    <p className="text-white text-center lg:text-2xl md:text-lg sm:text-sm">"If you believe it will work out, you'll see opportunities. If you don't believe it will work out, you will see obstacles." - Wayne Dyer
                    </p>
                </div> */}
                <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
                    <div className="text-center">
                        <button className="mt-10 bg-[#a45ee5] hover:bg-[#6d12c2] text-white font-bold py-2 px-4 rounded-full" onClick={onClickHandler}>
                            Generate Quote
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-white text-center lg:text-2xl md:text-lg sm:text-sm">{quote}
                    </p>
                </div>
            </section>
        );
    
}
   
export default Generate;

// sm:py-12 xs:py-4 py-8