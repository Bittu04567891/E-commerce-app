import { useEffect, useState } from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { userRequest } from "../../requestMethods";

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        if (res.data.length >= 2) {
          setIncome(res.data);
          setPerc((res.data[1].total * 100) / res.data[0].total - 100);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getIncome();
  }, []);

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          {income.length >= 2 ? (
            <>
              <span className="featuredMoney">₹{income[1]?.total}</span>
              <span className="featuredMoneyRate">
                %{Math.floor(perc)}{" "}
                {perc < 0 ? (
                  <ArrowDownward className="featuredIcon negative" />
                ) : (
                  <ArrowUpward className="featuredIcon positive" />
                )}
              </span>
            </>
          ) : (
            // Render a loading state or handle the absence of data
            <span>Loading...</span>
          )}
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Other featured items */}
    </div>
  );
}
