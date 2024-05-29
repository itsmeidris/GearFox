import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/LandingPageComponents/BentoGrid";
import model1 from '../../assets/LpageAssets/ModelsPics/model1.jpg';
import model2 from '../../assets/LpageAssets/ModelsPics/model2.jpg';
import model3 from '../../assets/LpageAssets/ModelsPics/model3.jpg';
import model4 from '../../assets/LpageAssets/ModelsPics/model4.jpg';
import model5 from '../../assets/LpageAssets/ModelsPics/model5.jpg';
import model6 from '../../assets/LpageAssets/ModelsPics/model6.jpg';
import model7 from '../../assets/LpageAssets/ModelsPics/model7.jpeg';

export function Discount() {
  return (
    <BentoGrid className="max-w-full mx-0 text-left">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({imgSrc}) => (
  <div 
  className="bg-cover bg-center bg-no-repeat bg-myGrey w-full h-full rounded-md"
  style={{ backgroundImage: `url(${imgSrc})` }}
  ></div>
);
const items = [
  {
    title: "Helmet Heaven",
    description: "Get 20% off on all motorcycle jackets. Ride in style and safety.",
    header: <Skeleton imgSrc={model2} />,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
  {
    title: "Boots Bonanza",
    description: "Step into comfort with 15% off on all motorcycle boots. Offer ends soon!",
    header: <Skeleton imgSrc={model7} />,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
  {
    title: "Accessorize and Save",
    description: "Protect your hands with 10% off on all gloves. Perfect for every ride.",
    header: <Skeleton imgSrc={model3} />,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
  {
    // title: "Helmet Heaven",
    title: "Seasonal Specials",
    description: "Stay safe with 25% off on all helmets. Best protection, best price.",
    header: <Skeleton imgSrc={model4} />,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
  {
    title: "Gloves Galore",
    description: "Extra 5% off on any complete set of jacket, boots, gloves, and helmet.",
    header: <Skeleton imgSrc={model5} />,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
  {
    // title: "Accessorize and Save",
    title: "Complete Your Look",
    description: "10% off on all motorcycle accessories. Enhance your ride.",
    header: <Skeleton imgSrc={model1}/>,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
  {
    title: "Gear Up with Savings!",
    description: "Exclusive seasonal discounts on select gear. Limited time offer!",
    header: <Skeleton imgSrc={model6} />,
    icon: <h1 className="bg-myRed text-myWhite inline-block px-2 rounded-md">-20%</h1>,
  },
];