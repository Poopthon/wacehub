interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    bio: string;
    avatar?: string;
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <div className="mt-4 bg-white rounded-lg p-6 flex flex-col items-center shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-xl">
      {member.avatar && (
        <img
          src={member.avatar}
          alt={member.name}
          className="w-28 h-28 rounded-full mb-4 shadow-md"
        />
      )}
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">
          {member.name}
        </h2>
        <p className="text-sm font-medium text-gray-700 mb-2">{member.role}</p>
        <p className="text-sm text-gray-800">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
