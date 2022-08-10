import MemberCard from "./MemberCard";

const MembersContainer = ({ members }) => {
  return (
    <div className="text-left w-full lg:w-[1024px] sm:p-4 px-8 ">
      <h2 className="text-4xl mb-4">Members & Contributors</h2>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {members.map((member) => (
          <MemberCard data={member} key={member.name} />
        ))}
      </div>
    </div>
  );
};

export default MembersContainer;
