

const SearchCard = () => {
    return (
        <div className="w-full">
            <div className=" border text-center p-6 space-y-3">
            <div className="flex justify-center items-center">
            <img className="w-24 h-24 rounded-full" src="/public/support.png" alt="" />
            </div>
            <h2 className="text-xl font-semibold">Shorif Ahamed</h2>
            <p>Rohanpur, Rajshahi</p>

            <button className="btn btn-outline btn-sm">Contact Donar</button>
            </div>
            
        </div>
    );
};

export default SearchCard;