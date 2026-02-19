import React from 'react';

const RainbowHero = () => {
    return (
        <div className="w-full bg-blue-50 py-8 text-center relative overflow-hidden">
            {/* 
            TODO: User to replace this div or the image source with the actual rainbow image.
            The request was "without the writing". If the image has writing, it might need cropping
            or a different version. For now, we use a placeholder visual.
        */}
            <div className="container mx-auto px-4">
                <div className="relative mx-auto max-w-4xl h-64 bg-gradient-to-t from-sky-200 to-transparent rounded-t-full flex items-end justify-center overflow-hidden shadow-lg border-b-8 border-green-500">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-xl">
                        Rainbow Image Placeholder
                    </div>
                    {/* Simulated rainbow bands if no image is present, just for visual appeal until replaced */}
                    <div className="w-[120%] h-[120%] rounded-full border-[20px] border-red-400 absolute top-10 left-[-10%] z-10 opacity-30"></div>
                    <div className="w-[110%] h-[110%] rounded-full border-[20px] border-orange-400 absolute top-14 left-[-5%] z-20 opacity-30"></div>
                    <div className="w-[100%] h-[100%] rounded-full border-[20px] border-yellow-400 absolute top-18 left-[0%] z-30 opacity-30"></div>
                    <div className="w-[90%] h-[90%] rounded-full border-[20px] border-green-400 absolute top-22 left-[5%] z-40 opacity-30"></div>
                </div>
                <p className="mt-2 text-sm text-gray-500 italic">
                    (Place your "Rainbow" image in <code>src/assets</code> and update this component to use it)
                </p>
            </div>
        </div>
    );
};

export default RainbowHero;
