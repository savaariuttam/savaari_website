
import InformationSection from "./infosec";
import DomesticFlight from "./domesticflight";
import InternationalFlight from "./internationalflight";
function Rightscreen() {
    return (
        <div className="right-box flex flex-col justify-start mt-[30px] ml-0 top-[100px] min-w-[80px]">
            <section className="add-banner">
                <div className="flex flex-wrap md:justify-center lg:justify-start">
                    <div className="w-5/6">
                        <a href="#" className="add-box block">
                            <img
                                src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_jdnKBFj.jpg"
                                alt="Banner 1"
                                className="w-full h-auto"
                            />
                        </a>
                    </div>
                    <div className="flex flex-row">
                        <div className="lg:w-1/2 md:w-1/2 mt-4 md:mt-0">
                            <a href="#" className="add-box block">
                                <img
                                    src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_sRwzbpm.jpg"
                                    alt="Banner 2"
                                    className="w-5/6 h-auto"
                                />
                            </a>
                        </div>
                        <div className="lg:w-1/2 md:w-1/2 mt-4 md:mt-0">
                            <a href="#" className="add-box block">
                                <img
                                    src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_sRwzbpm.jpg"
                                    alt="Banner 3"
                                    className="w-5/6 h-auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="specials pt-8">
                <p className="text-base font-semibold">Our Specials <span className="text-red-500 cursor-pointer text-xs">View All</span></p>
            </div>
            <div className="flight-sec pt-16">
                <p className="text-base font-semibold">Popular <span className="text-red-500 cursor-pointer text-base">Domestic</span> Flight Routes</p>
            </div>
            <div className="w-full flex justify-between my-4">
            <DomesticFlight />
            </div>
            <div className="flight-sec pt-6">
                <p className="text-base font-semibold">Popular <span className="text-red-500 cursor-pointer text-base">International</span> Flight Routes</p>
            </div>
            <div className="w-full flex justify-between my-4">
            <InternationalFlight />
            </div>
            <InformationSection />
        </div>

    )
}



export default Rightscreen;