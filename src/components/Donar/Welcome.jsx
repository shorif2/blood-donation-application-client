

const Welcome = ({name}) => {
    return (
        <div className="mt-4 p-6 bg-red-200 rounded">
            <h2 className="text-xl font-medium">
                Welcome back {name}!
            </h2>
            <p className="pt-2">You've reach 80% of your goal this week!</p>
        </div>
    );
};

export default Welcome;