import { useState } from "react";

const HomeLoan = () => {
    const [currentLoan, setCurrentLoan] = useState(1);

    const handleLoan = (loanNumber) => {
        setCurrentLoan(loanNumber);
    };
    return (

        <div className="m-10 md:flex gap-6 w-[800px] h-36 p-4 bg-blue-50 items-center">
            <div><p className="text-3xl font-semibold">Need a Home Loan?</p>
                <p className="text-[#535353]">Select How much Home loan you can take</p></div>
            <div className="flex-grow ">
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((loanNumber) => (
                        <button
                            key={loanNumber}
                            onClick={() => handleLoan(loanNumber)}
                            className={`flex-1 py-1 ${currentLoan >= loanNumber
                                ? 'bg-[#8AB3DB] text-white'
                                : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                                }`}
                        >

                        </button>

                    ))}
                </div>
                <div className="flex justify-between text-[#535353]">
                    <p>$20K</p>
                    <p>$30K</p>
                    <p>$40K</p>
                    <p>$50K</p>
                    <p>$60K+</p>
                </div>
            </div>
        </div>

    );
};

export default HomeLoan;