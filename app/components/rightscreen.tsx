
import OwlCarousel from "./owl";
import OwlCarousel2 from "./owl2";
import InformationSection from "./infosec";
function Rightscreen() {
    return (
        <main className="right_main w-full md:w-1/2">
            <div className="right-box">
                <div className="first_img">
                    <img src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_jdnKBFj.jpg" alt="" />
                </div>
                <div className="second_img flex flex-col md:flex-row">
                    <img src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_sRwzbpm.jpg" alt="" />
                    <img src="https://onlinesavaari.website/media/banner/sales_banners_twT4tCR_sRwzbpm.jpg" alt="" />
                </div>
                <div className="specials pt-8">
                    <p>Our Specials <span className="text-red-500">View All</span></p>
                </div>
                <div className="flight-sec pt-16">
                    <p>Popular <span className="text-red-500">Domestic</span> Flight Routes</p>
                </div>
                <OwlCarousel />
                <div className="flight-sec pt-6">
                    <p>Popular <span className="text-red-500">International</span> Flight Routes</p>
                </div>
                <OwlCarousel2 />
                <InformationSection />
            </div>

        </main >

    )
}



export default Rightscreen;