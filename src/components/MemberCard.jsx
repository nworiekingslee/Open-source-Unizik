import { useState, useEffect } from "react";
import GitHub from "../images/GitHub.svg";
import axios from "axios";

const MemberCard = ({ data }) => {
  const [member, setMember] = useState();

  useEffect(() => {
     const APIURL = "https://api.github.com/users/";
    async function getUser(username) {
      try {
        const { data } = await axios(APIURL + username);
        setMember(data);
        console.log("gigetihub", data);
      } catch (e) {
        console.log(e);
      }
    }

    getUser(data.github_username);
  }, [data]);

  return (
    <a
      href={member?.html_url}
      target="_blank"
      rel="noreferrer"
      className="w-full sm:max-w-[300px] text-left rounded-md border my-3 mx-auto bg-white member-card"
    >
      <img
        src={member?.avatar_url}
        alt={data.name}
        className=" w-full sm:max-w-[300px]rounded-t-md cursor-pointer"
      />
      <p className="font-bold text-lg mt-2 pl-2">{data.name}</p>
      <p className="text-sm pl-2">{data.role}</p>
      <div className="mt-2 bg-red-20 py-1 pr-2 flex flex-wrap">
        {data.skills.map((skill) => (
          <span
            key={skill}
            className="text-[12px] my-1 p-1 px-2 border border-purple-200 bg-purple-50 rounded-sm ml-2"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="username p-3 text-sm text-left flex items-center border-t cursor-pointer">
        <img src={GitHub} alt="GitHub" className="mr-1 h-4" />@
        {data.github_username}
      </div>
    </a>
  );
};

export default MemberCard;
