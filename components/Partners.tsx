import React from 'react';

const brands = [
    { name: 'Apple', logo: 'https://cdn.simpleicons.org/apple/white' },
    { name: 'Samsung', logo: 'https://cdn.simpleicons.org/samsung/white' },
    { name: 'Adidas', logo: 'https://cdn.simpleicons.org/adidas/white' },
    { name: 'Zara', logo: 'https://cdn.simpleicons.org/zara/white' },
    { name: 'Sony', logo: 'https://cdn.simpleicons.org/sony/white' },
    { name: 'Lego', logo: '/images/brands/lego.png', isCustom: true },
    { name: 'Dyson', logo: '/images/brands/dyson.png', isCustom: true },
    { name: 'Honor', logo: 'https://cdn.simpleicons.org/honor/white' },
    { name: 'Zegna', logo: '/images/brands/zegna.png', isCustom: true },
];

const Partners = () => {
    return (
        <section
            className="py-16 bg-[#050914] border-b border-white/5"
            style={{ contentVisibility: 'auto', containIntrinsicSize: '200px' } as any}
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Biz kimlar bilan <span className="text-blue-500">ishlaganmiz?</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base">
                        Xalqaro va mahalliy bozor yetakchilari bilan hamkorlik
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center group"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className={`max-w-full max-h-full object-contain transition-all duration-300 opacity-50 group-hover:opacity-100 ${brand.isCustom ? 'mix-blend-screen' : ''}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
