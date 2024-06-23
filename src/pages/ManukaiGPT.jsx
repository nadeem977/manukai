import React, { useState ,useEffect,useRef} from "react";
import Layout from "../components/Layout";
import SideBarConponet from "../components/SideBarConponet";
import { PlusBorderIcon, SentMessage } from "../components/Icon";
import ManukaiGraph from "../components/ManukaiGraph";
import Usersms from "../components/Usersms";
import { GptReplay, GptAnlatycs } from "../components/GptReplay";
import dyamiimg from "../assets/img/dyami.png";

const ManukaiGPT = () => {
  const [userprompts, setUserprompts] = useState("");
  const [usersms, setUsersms] = useState([]);
  const chatEndRef = useRef(null);

  const sendmessage = () => {
 
    setUsersms((prev) => [...prev, userprompts]);
    setUserprompts("");
  };
 
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
const handelsmssend=(event)=>{
  if(event.key === "Enter"){
    setUsersms((prev) => [...prev, userprompts]);
    setUserprompts("");
  }

}
  useEffect(() => {
    scrollToBottom();
  }, [usersms]);
  return (
    <>
      <Layout sidebar={<SideBarConponet />}>
        <section className="flex gap-3 w-full h-full flex-col xl:flex-row">
        <div className="w-full p-3 rounded-[16px] bg-[#091D22]">
      <section  className="w-full manikaiGpth overflow-y-auto ">
        {/* user sms  */}
        {/* user sms  */}
        <div className="flex items-center gap-3 pl-1 w-full mt-4">
          <img src={dyamiimg} alt="icons" />
          <h1 className="text-[16px] mt-1">first chat send by user</h1>
        </div>

        {/* GPT replay */}
        <GptAnlatycs />

        <div className="flex items-center gap-3 pl-1 w-full mt-4">
          <img src={dyamiimg} alt="icons" />
          <h1 className="text-[16px] mt-1">first chat send by user (2)</h1>
        </div>

        {/* GPT replay */}
        <GptReplay />
        <div ref={chatEndRef} />
      <div>
      {usersms.map((text, i) => (
          <Usersms key={i} text={text} />
        ))}

      </div>
      </section>
      <div className="flex items-center w-full overflow-hidden h-[60px] rounded-full bg-[#0F2A31] border-[1px] border-[#15677A]">
        <input
          type="text"
          placeholder="What’s in your mind?..."
          className="w-full h-full pl-5 text-white outline-none border-none rounded-full text-[16px] bg-transparent"
          value={userprompts}
          onChange={(e) => setUserprompts(e.target.value)}
          onKeyDown={handelsmssend}
        />
        <div
          className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#091D22] cursor-pointer mr-3"
          onClick={sendmessage}
          
        >
          <SentMessage />
        </div>
      </div>
    </div>

          <div className=" w-full xl:w-[300px] 2xl:w-[415px] flex flex-col justify-between  rounded-[16px] bg-[#091d23]">
            <div className="manikaigraphH overflow-y-auto">
              <div className="flex flex-col gap-1">
                <ManukaiGraph />
                <hr className="text-[#0F2A31]" />
                <ManukaiGraph />
              </div>
            </div>
            <button className="add-new-graph-button h-[60px] gap-2">
              <PlusBorderIcon /> Add New Graph
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ManukaiGPT;