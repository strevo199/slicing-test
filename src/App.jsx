import React from "react";
import "./App.css";
import { NavBar } from "./component";
import showcase from "./assets/img/showcase.png";
import showcase2 from "./assets/img/showcase2.png";
import card from "./assets/img/card.png";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className=" h-96 w-full flex">
        <img src={showcase} alt="" className="flex-1 showcase" />
        <img src={showcase2} alt="" className="flex-1 showcase2" />
      </div>

      {/*  */}
      <div className="credit sm:p-10 bg-slate-100">
        <div className="credit-header text-xl mb-4 sm:px-0 sm:py-0 py-2 px-10">
          Credit Opportunities With Good Approval Odds †
        </div>
        <div className=" p-10 bg-white flex flex-1 flex-col">
          <div className="flex justify-between credit-light  w-full">
            <div className="text-sm">
              {" "}
              Barclaycard CashForward <sup className=" mb-10" style={{fontSize:'6px'}}>TM</sup> World MasterCard<sup style={{fontSize:'6px'}}>TM</sup>
            </div>
            <div className="text-xs">3,252 Reviews</div>
          </div>
          {/* card */}
          <div>
          <div className="my-3 flex sm:flex-row flex-col gap-x-8 border-b-2 py-5">
            <div className="flex sm:block">
              <div className="flex flex-1 gap-x-3">
                <div className="flex-1">
                  <img src={card} alt="" className=" h-20" />

                </div>
                <div className="text-xs credit-light text-center flex-1">
                  <div>Approval </div>
                  <div>Odds †</div>
                  <div className="status mt-2 px-2 py-0.5 font-bold text-white rounded-lg">
                    Very Good
                  </div>
                </div>
              </div>

                <button className=' bg-orange-500 sm:block hidden text-white text-sm py-1 credit-header w-full mt-3 rounded-lg'> Apply Now</button>
            </div>
            <div className="flex-1 ">
              <ul className="text-xs flex flex-col gap-2 sm:my-0 my-3">
                <li className=" list-disc">
                  Get a $100 cash rewards bonus after you spend $500 in
                  purchases in the first 90 days after account oppening.
                </li>
                <li className=" list-disc">
                  Earn unlimited 1.5% cash rewards on every purcahse.
                </li>
                <li className=" list-disc">
                  Earn unlimited 1.5% cash rewards on every... <span  style={{color:'#9dd1fc'}}>show more</span>
                </li>
              </ul>
              <button className=' bg-orange-500 sm:hidden text-white text-sm py-1 credit-header w-full mt-3 rounded-lg'> Apply Now</button>

            </div>
          </div>
          <div className="text-sm" style={{color:'#9dd1fc'}}>See Details Rates & Fees</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



