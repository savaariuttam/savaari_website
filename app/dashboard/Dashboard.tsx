import { SlNote } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CgNotes } from "react-icons/cg";
import Link from "next/link";
const DashboardBox = ({
  headingname,
  imageSrc,
  litext1,
  litext2,
  litext3,
  btn,
}) => {
  const iconMap = {
    ModifyBooking: <SlNote />,
    Ticket: <IoTicketOutline />,
    Profile: <CgProfile />,
    SubUser: <CgNotes />,
  };
  const isIcon = iconMap.hasOwnProperty(imageSrc);
  const iconContent = isIcon ? (
    iconMap[imageSrc]
  ) : (
    <img src={imageSrc} alt="img" />
  );
  const hasLitext3 = litext3 && litext3.trim() !== "";
  return (
    <>
      <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2 pr-4 pl-4">
        <div className="dashboard-box">
          <div className="head-sec">
            <h4 className="m-0">{headingname}</h4>
          </div>
          <div className="body-sec ">
            <div
              className="img-sec flex items-center justify-center"
              style={{ fontSize: "60px", color: "#ea2330" }}
            >
              {iconContent}
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/cancle">
                  <small>{litext1}</small>{" "}
                  <SlArrowRight
                    style={{ position: "absolute", right: 0, top: 4 }}
                  />
                </Link>
              </li>
              <li>
                <a href={litext2}>
                  <small>{litext2}</small>{" "}
                  <SlArrowRight
                    style={{ position: "absolute", right: 0, top: 4 }}
                  />
                </a>
              </li>
              {hasLitext3 ? (
                <li>
                  <a href={litext3}>
                    <small>{litext3}</small>{" "}
                    <SlArrowRight
                      style={{ position: "absolute", right: 0, top: 4 }}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div>{btn}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBox;
