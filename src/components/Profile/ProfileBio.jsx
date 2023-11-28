

const ProfileBio = ({ text1, text2}) => {
    return (
        <div className="flex border-b-2  gap-44 justify-center py-2">
            
        <p className="text-right w-2/4">{text1}</p>
        <p className="text-left w-2/4">{text2}</p>
        
        </div>
    );
};

export default ProfileBio;