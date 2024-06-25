import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideBarConponet from "../components/SideBarConponet";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  KysIconsColors,
  PausIcons,
  PlayIcons,
  ReaportIcon,
  TaligramIcon,
} from "../components/Icon";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import ControlPanel from "../components/ControlPanel";
import { tableData } from "../assets/data/data";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import taligramimg from "../assets/img/taligram.png";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { AppContext } from "../contexts/authContext";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    "& .MuiAccordionSummary-content": {
      margin: 0,
      padding: 0,
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(-90deg)",
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Surveillance = () => {



  const [panelOpen, setPanelOpen] = useState(false);
  const [pousPlay, setPousPlay] = useState(true);
  const [rating, setRating] = useState([]);
  const [data, setData] = useState([]);
  const [reversingData, setReversingData] = useState(false);
  const [profanitytoggle, setProfanitytoggle] = React.useState(false);
  const [translatetoggle, setTranslatetoggle] = React.useState(false);
  const {showchats} = useContext(AppContext)
 

  const [expand, setExpand] = React.useState(false);
  const toggleAcordion = (key) => {
    setExpand(key);
  };


  useEffect(() => {
    const tabledata = reversingData ? [...tableData].reverse() : tableData;
    setData(tabledata);
  }, [reversingData]);

  const handleStarClick = (index) => {
    setRating((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };
 


  return (
    <>
      <Layout sidebar={<SideBarConponet />}>
        <div className="bg-[#091D22] p-3 rounded-[19px]">
          <div className="border-[1.2px] rounded-[14px] border-[#4ED2EF80] w-full setHeight overflow-y-auto">
            <div className="border-b border-[#4ED2EF80] p-2 flex items-center justify-between flex-wrap gap-2">
              <div>
                <h1 className="text_title text-[18px] md:text-3xl">
                  BALI AIRPORT SECURITY
                </h1>
                <div className="flex items-center gap-1 mt-1">
                  <div className="alertred pl-1 text-[14px]">3 CRIT</div>
                  <div className="alert-yellow pl-1 text-[14px]">11 WARN</div>
                  <div className="alert-green pl-1 text-[14px]">64 OK</div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[13px] justify-end">
                  <button
                    className={`text-[18px] w-[170px] border-[1px] gap-1 justify-center flex items-center rounded px-2 border-[#12A5C6] py-[5px] ${
                      panelOpen ? "bg-[#12A5C6] text-white" : "text-[#12A5C6]"
                    }`}
                    onClick={() => setPanelOpen(!panelOpen)}
                  >
                    <SettingsIcon /> Control Panel
                  </button>
                  <div
                    className="cursor-pointer ml-1"
                    onClick={() => setPousPlay(!pousPlay)}
                  >
                    {pousPlay ? <PausIcons /> : <PlayIcons />}
                  </div>
                  <div className="cursor-pointer flex items-center">
                    <DeleteSharpIcon
                      style={{ color: "#F73838A3", fontSize: "27px" }}
                    />
                  </div>
                </div>
                <div className="alertred pr-2 text-[14px] mt-2">
                  LIVE Scraping | Updated 1 min ago
                </div>
              </div>
            </div>
            {panelOpen && <ControlPanel />}
            <div className=" overflow-x-auto flex gap-3   bg-[#0F2A31] rounded m-2  ">
              <section className="min-w-[1370px]  text-white">
                <div className="flex items-center justify-between gap-1 text-[#B3B3B3] border-b-[1px] border-[#2b2b37] text-[11px] pr-4">
                  <p
                    className="p-2 flex items-center w-[60px] cursor-pointer"
                    onClick={() => setReversingData((prev) => !prev)}
                  >
                    #
                    <ExpandMoreIcon
                      className={`${
                        reversingData ? "rotate-180" : ""
                      }  text-[15px]`}
                    />
                  </p>

                  <p className="p-2 flex items-start tracking-[2px] w-[60px] ">
                    FAV
                  </p>
                  <p className="p-2 flex justify-center tracking-[2px] w-[60px] ">
                    RISK
                  </p>
                 {showchats && <p className="p-2 flex justify-center tracking-[2px] w-[60px] ">
                    APP
                  </p>}
                  <p className="p-2 flex items-start tracking-[2px] w-[250px] ">
                    TITLE
                  </p>
                  <p className="p-2 flex items-start tracking-[2px] w-[250px] ">
                    KEYWORDS
                  </p>
                  <p className="p-2 flex items-start tracking-[2px] w-[100px] ">
                    SOURCE
                  </p>
                  <p className="p-2 flex items-start tracking-[2px]  w-[140px] ">
                    COUNTRY
                  </p>
                  <p className="p-2 flex items-start tracking-[2px]  w-[125px] ">
                    DATE
                  </p>
                  <p className="p-2 flex items-start tracking-[2px]  w-[50px] ">
                    URL
                  </p>
                  <p className="p-2 flex items-start tracking-[2px]  w-[80px] ">
                    LANG
                  </p>
                  <p className="p-2 flex items-start tracking-[2px]  w-[50px] mr-3 ">
                    SEEN
                  </p>
                </div>
                {data?.map((item, i) => (
                  <React.Fragment key={i}>
                    <Accordion
                    expanded={expand === i ?true : false} 
                      style={{
                        background: i % 2 === 0 ? "#0F252A" : "transparent",
                        color: "white",
                        padding: 0,
                        border:
                        expand ===i ? "1px solid #12A5C6" : "",
                      }}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon 
                          style={{color:"#4ED2EF80" ,fontSize:"30px"}}
                          onClick={()=>toggleAcordion(expand === i ?false:i)}/>}
                        aria-controls={`panel${i}a-content`}
                       >
                        <div className="w-full flex items-center justify-between  gap-1">
                          <p className="px-2 w-[60px] text-[14px] text-[#B3B3B3]  ">
                            {item?.point}
                          </p>
                          <p className="px-2 w-[60px] text-[#B3B3B3]">
                          <i
                    className={`bi ${
                      rating.includes(i) ? "bi-star-fill text-[#F7D240]" : "bi-star"} text-[16px]`}
                    onClick={() => handleStarClick(i)}></i>
                          </p>
                          <p
                            className={`w-[60px] uppercase rounded font-semibold flex items-center justify-center h-[30px]
                        ${
                          item.risk.toLocaleLowerCase() ===
                          "ok"
                            ? "bg-[#4D9F69] text-black"
                            : item.risk.toLocaleLowerCase() ===
                              "crit"
                            ? "bg-[#A8372D] text-white"
                            : "bg-[#F7D240] text-black"
                           }`}>
                            {item?.risk}
                          </p>
                         {showchats && <div className="w-[60px] flex items-center justify-center">
                            <img
                              src={item.appicon}
                              alt=""
                              className="w-[30px] h-[30px] object-cover"
                            />
                          </div>}
                          <p className="px-2 w-[250px] text-[16px] font-semibold">
                            {item?.title}
                          </p>
                          <p className="px-2 w-[250px] text-[14px]">
                            {item?.keywords}
                          </p>
                          <p className="px-2 w-[100px]">{item?.scoure}</p>
                          <p className="px-2 w-[140px]">{item?.countery}</p>
                          <p className="px-2 w-[125px]">{item?.date}</p>
                          <p className="px-2 w-[50px] text-[#54ACBF]">link</p>
                          <p className="px-2 w-[80px] text-[#54ACBF]">
                            {item?.lang}
                          </p>
                          <p className="px-2 w-[50px] text-[#4C9D68]  uppercase">
                            {item?.seen}
                          </p>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails style={{ padding: 0 }}>
                        <div className="flex gap-1 ">
                          <div className="w-[90%] py-4 px-2">
                            <h1 className="text-[14px] font-bold">
                              {item?.alarts}
                            </h1>
                          </div>
                          <div className="overflow-y-auto w-[80%] h-[170px]">
                            <div
                              className="w-full flex h-full
                                                 flex-col gap-2 border-r border-l border-[#FFFFFF3B] p-2"
                            >
                              <div
                                className="flex  gap-3 
                                                   rounded-[10px] p-1 min-h-[40px] bg-[#00000017] text-[#37BC64] "
                              >
                                <KysIconsColors color="#37BC64" />
                                <p className="mt-[-3px]">{item?.successms}</p>
                              </div>
                              <div
                                className="flex gap-3 
                                                   rounded-[10px] min-h-[40px] bg-[#00000017] p-1 text-[#F7D240] "
                              >
                                <KysIconsColors color="#F7D240" />
                              </div>
                              <div
                                className="flex  gap-3 
                                                    rounded-[10px] min-h-[40px] bg-[#00000017] p-1 text-[#A8372D] "
                              >
                                <KysIconsColors color="#A8372D" />
                              </div>
                            </div>
                          </div>
                          <div className="w-full p-2 overflow-y-auto h-[180px]">
                            <p className="text-[14px] ">
                              <span className="font-bold">
                                Executive Summary:
                              </span>{" "}
                              <span className="italic">{item?.desc}</span>
                            </p>
                          </div>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </React.Fragment>
                ))}
              </section>
             {showchats && <div className="min-w-[360px] mr-2">
                <p className="p-2 w-full text-center text-[#B3B3B3] text-[11px]">
                  CHAT
                </p>
                <div className="w-full rounded-lg bg-[#0f252a] p-2">
                  <div>
                    <div className="flex items-center gap-3 w-fit mx-auto py-3">
                      <img src={taligramimg} alt="icon" />
                      <span>
                        <h1 className="text-[17px] font-bold ">
                          Telegram Group Chat (299/300)
                        </h1>
                        <p className="text-[#AEAEAE] text-[16px]">
                          Нец ат мелиус
                        </p>
                      </span>
                    </div>
                    <div className="flex justify-between pl-5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <button
                          className={`border-[1px] border-[#4ED2EF] ${
                            translatetoggle
                              ? "bg-[#4ED2EF] text-black"
                              : "text-[#12A5C6]"
                          } w-fit px-2 flex items-center text-[12px] h-[25px] gap-1 font-semibold   rounded`}
                          onClick={() => setTranslatetoggle(!translatetoggle)}
                        >
                          <SpeakerNotesIcon
                            style={{ fontSize: "13px", marginTop: "2px" }}
                          />
                          Translate
                        </button>
                        <button
                          className={`border-[1px] border-[#4ED2EF] ${
                            profanitytoggle
                              ? "bg-[#4ED2EF] text-black"
                              : "text-[#12A5C6] "
                          } w-fit px-2 font-semibold text-[12px] h-[25px] rounded flex items-center gap-1`}
                          onClick={() => setProfanitytoggle(!profanitytoggle)}
                        >
                          <ReaportIcon
                            color={`${profanitytoggle ? "black" : "#4ED2EF"}`}
                          />{" "}
                          Profanity Filter
                        </button>
                      </div>
                      <span>
                        <p className="text-[#888888] text-[10px]">
                          72% Russian
                        </p>
                        <p className="text-[#888888] text-[10px]">
                          22% Ukrainian
                        </p>
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex gap-2 mt-1 hover:bg-[#091D21B2] rounded p-2">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/9cf1/c658/9b122dc771f3fb037ab3794024f499bb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qt-JN2N84Q4XHVBlURphoXD1zfkcbspFKwsZm6uEoGFx~htd0rM-GjlTMTxJl3R1F2eD3cYG7gF5KlNwCzSw6hb78M~EVoEnBdhq4DgAiZKzSokAIXvpOK71BhQjYEKNHMXj-xVK9enFl9VFbf70gSE4SSVoVEQCbTbXdYb8FVNfraVjaiVPLOJN~4~qDcO6w7qFPZm6HcI9K~zQIRONm~zLhMXXsbZ~nI-oOt60RxrNlQuATjfwHvWF85w5RdSnRCgzOlLtrM0qFg9c0fdZdzq7nK7DtghQXIJ5fRNLhhvXesR8IfmmDt-sc~JrKRRKAh-zOneYA8TLMIN0w7DsFw__"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                        alt="icons"
                      />
                      <div>
                        <div className="flex items-center justify-between gap-1 flex-wrap w-full">
                          {" "}
                          <p className="text-[#D11D1D] text-[13px]">
                            Culprit ‘Туся’
                          </p>
                          <p className="text-[#9D9D9D] text-[10px]">
                            10:05:35Z 28/05/24
                          </p>
                        </div>
                        <p className="flex items-center">
                          Лорем ипсум долор сит{" "}
                          <p className="text-[#DD3A3A] flex items-center">
                            <p className="w-fit h-fit rotate-45">
                              <i className="bi bi-key"></i>
                            </p>{" "}
                            амет
                          </p>{" "}
                          , ех фуиссет
                        </p>
                        <p>тхеоптус про, натум индоцтум елецтрам вим не</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-1 hover:bg-[#091D21B2] rounded p-2">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/390a/de9e/b76ce47092a08f0a53e81bbaf56c110c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qALEfnwy-CenjHALWxYInmJPuFGFtj9ydKZ1egAr3nj0eD6iFV9xELZ8BE03nzwgj5MsY4asnLsqV0SWPrCnfBZ~V0Is0SncQGffILPj6oc0LYppxu7xLw6WUKaZzUvhyyBn5VUzAiL7iGAqqLDvkgXtNsAdrdhdc7-66d1PEY80yWY2rmW89oybqmyK9yiArUCk8-K16v4khv-mYuesjszXpIkSWvNFXeZEeGgcmy~RppH01O8dapnuxFDwnuwIZ3x5tAqZLxdn3SWLfi6M-HjnwcUUW-dx~PCFEZi7i9ngycttRDQcYIXYmJiLwFbhMN3d7~HFIf8pB0gMNOR0aQ__"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                        alt="icons"
                      />
                      <div>
                        <div className="flex items-center justify-between gap-1 flex-wrap w-full">
                          {" "}
                          <p className="text-[#D1691D] text-[13px]">‘Адря’</p>
                          <p className="text-[#9D9D9D] text-[10px]">
                            10:05:35Z 28/05/24
                          </p>
                        </div>
                        <p className="flex items-center">
                          Лторяуатос, ноструд десерунт персецути ан хас, еум ин
                          унум атоморум. Те модо номинати еос.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-1 hover:bg-[#091D21B2] rounded p-2">
                      <img
                        src="https://s3-alpha-sig.figma.com/img/b3d3/ee4e/11a621e9a3c24bf23e50edd11f2da978?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FDu38OjXP0EQCnPPctBeL6cEX6zh~uhhNeqU57xkU~RSls7NZa~hz7Gof~XOarWg4KKQmMCEWtAn0nmOveLCPBM1g-o8K3k6ZabZi75d4fjgIfCN7NY5Odhr8DhtqKPIh-uqM9m-i2SA42FkPwzWIK8V1hEcWBmvdPe7zmKKA8Vr2tSAKD65DmVzK-sqC41ce1TyLqFZrIOpJHS1RlnMfO66gAF0F-CxdRtu6rbrOU1WgAfe542pbmENNH4fAKzZKpra713Ui-33x~6~0Ef-8lhYn4T1hDtHqbt1d1otHXa47eQUbPT6J5sEb-YmSCQIxJX2jTn9e6CQgtsXl7JkPQ__"
                        className="w-[40px] h-[40px] rounded-full object-cover"
                        alt="icons"
                      />
                      <div>
                        <div className="flex items-center justify-between gap-1 flex-wrap w-full">
                          {" "}
                          <p className="text-[#4D54FF] text-[13px]">‘Колюня’</p>
                          <p className="text-[#9D9D9D] text-[10px]">
                            10:05:35Z 28/05/24
                          </p>
                        </div>
                        <p className="flex items-center">
                          Еос нонумы адиписци яуалисяуе ан, ат про идяуе
                          нолуиссе яуалисяуе, ут меи яуис
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Surveillance;
