'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Location = () => {
    const [isMounted, setIsMounted] = useState(false);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GMAPS_KEY}&q=Okara,Pakistan&zoom=13`;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <section className="relative min-h-[600px] py-16 px-4">
            {/* Floating Particles Background */}
            <div className="absolute inset-0 animate-pulse-slow">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/10 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto relative"
            >
                <div className="perspective-1000 group">
                    <div className="relative bg-gradient-to-br from-blue-200 to-purple-200 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform transition-all duration-500">
                        {/* 3D Effect Layers */}
                        <div className="absolute inset-0 border-2 border-white/30 rounded-3xl pointer-events-none" />
                        <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none" />

                        <h2 className="text-4xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <motion.div 
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <svg className="w-12 h-12 text-red-500 drop-shadow-lg" /*...*/ >
                                    {/* Same pin icon as before */}
                                </svg>
                            </motion.div>
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                My Location Hub
                            </span>
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="p-6 bg-white/90 rounded-xl shadow-lg">
                                    <p className="text-xl font-semibold text-gray-800 mb-2">📍 Okara, Pakistan</p>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <svg className="w-6 h-6 text-purple-500" /*...*/ >
                                            {/* Timezone icon */}
                                        </svg>
                                        <span>Timezone: PKT (UTC+5)</span>
                                    </div>
                                </div>

                                <div className="p-6 bg-black/5 rounded-xl backdrop-blur-sm">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">Local Highlights</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Okara Fort</li>
                                        <li>• Head Balloki</li>
                                        <li>• Local Food Markets</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Map Container */}
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-95">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 z-10 pointer-events-none" />
                                <iframe
                                    title="3D Location Map"
                                    src={mapUrl}
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    className="absolute inset-0"
                                />
                                {/* Custom Map Marker */}
                                <div className="absolute top-1/2 left-1/2 w-8 h-8 -mt-4 -ml-4 animate-ping-slow">
                                    <div className="w-full h-full bg-red-500 rounded-full shadow-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Location;
