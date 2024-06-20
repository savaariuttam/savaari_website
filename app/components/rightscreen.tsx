
import InformationSection from "./infosec";
import DomesticFlight from "./domesticflight";
import InternationalFlight from "./internationalflight";
import BannerSec from "./UI/BannerSec";
function Rightscreen() {
    return (
        // ....................................................home page Right Screen..........................................................................
        <div className="right-box flex flex-col justify-start mt-[30px] ml-0 top-[100px] min-w-[80px] mx-6">
            <BannerSec />
            <div className="specials pt-8">
                <p className="text-base font-semibold">Our Specials <span className="text-red-500 cursor-pointer text-xs">View All</span></p>
            </div>
            <div className="flight-sec pt-16">
                <p className="text-base font-semibold">Popular <span className="text-red-500 cursor-pointer text-base">Domestic</span> Flight Routes</p>
            </div>
            {/*................................................ Domestic Flight Example start.................................................................*/}
            <div className="w-full flex justify-between my-4">
            <DomesticFlight />
            </div>
            {/*................................................ Domestic Flight Example end.................................................................*/}
            <div className="flight-sec pt-6">
                <p className="text-base font-semibold">Popular <span className="text-red-500 cursor-pointer text-base">International</span> Flight Routes</p>
            </div>
            {/*................................................ International Flight Example start.................................................................*/}
            <div className="w-full flex justify-between my-4">
            <InternationalFlight />
            </div>
            {/*................................................ International Flight Example end.................................................................*/}
            {/*................................................ Savaari information start........................................................................*/}
            <InformationSection />
            {/*................................................ Savaari information start........................................................................*/}
        </div>

    )
}



export default Rightscreen;