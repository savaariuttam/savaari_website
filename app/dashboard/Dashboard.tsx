import { FC } from "react";
import { SlNote, SlArrowRight } from "react-icons/sl";
import { IoTicketOutline } from "react-icons/io5";
import { CgProfile, CgNotes } from "react-icons/cg";
import Link from "next/link";

interface DashboardBoxProps {
  headingname: string;
  imageSrc: string;
  litext1: string;
  litext2: string;
  litext3?: string;
  btn: React.ReactNode;
}

const DashboardBox: FC<DashboardBoxProps> = ({
  headingname,
  imageSrc,
  litext1,
  litext2,
  litext3,
  btn,
}) => {
  const iconMap: Record<string, JSX.Element> = {
    ModifyBooking: <SlNote />,
    Ticket: <IoTicketOutline />,
    Profile: <CgProfile />,
    SubUser: <CgNotes />,
  };
  const iconContent = iconMap[imageSrc] || <img src={imageSrc} alt="img" />;
  const hasLitext3 = litext3 && litext3.trim() !== "";

  return (
    <div className="lg:w-1/4 pr-4 pl-4 md:w-1/2">
      <div className="dashboard-box custom-bg border custom-border rounded-md shadow-sm overflow-hidden mb-8">
        <div className="head-sec p-2.5 bg-[#333333] text-[#fff]">
          <h4 className="m-0 font-normal">{headingname}</h4>
        </div>
        <div className="body-sec p-6 min-h-[240px]">
          <div
            className="img-sec text-center mb-8 flex items-center justify-center"
            style={{ fontSize: "60px", color: "#ea2330" }}
          >
            {iconContent}
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/cancel">
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
            {hasLitext3 && (
              <li>
                <a href={litext3}>
                  <small>{litext3}</small>{" "}
                  <SlArrowRight
                    style={{ position: "absolute", right: 0, top: 4 }}
                  />
                </a>
              </li>
            )}
          </ul>
          <div>{btn}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
