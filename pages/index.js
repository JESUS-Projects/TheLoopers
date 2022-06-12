import React from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MainSearchBox from "../components/common/MainSearchBox";
import ButtonLink from "../components/common/ButtonLink";
import Link from "next/link";
import { IconButton, Tooltip } from "@mui/material";

// icons
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function Home() {
  const buttonLinks = {
    addingPoints: {
      text: "เติมพอยท์",
      path: "#",
    },
    myClothes: {
      text: "เสื้อผ้าของฉัน",
      path: "#",
    },
    repair: {
      text: "ซ่อมแซม",
      path: "#",
    },
    myShop: {
      text: "ร้านค้าของฉัน",
      path: "#",
    },
  };

  return (
    <div>
      <Navbar />

      <main>
        <header>
          <div className="flex justify-between items-center mx-3 mb-8">
            <Tooltip title="Help">
              <IconButton>
                <Link href="#">
                  <QuestionMarkIcon color="primary" />
                </Link>
              </IconButton>
            </Tooltip>
            <MainSearchBox />
            <Link href="#">
              <ShoppingCartOutlinedIcon color="primary" fontSize="large" />
            </Link>
          </div>

          <h2 className="text-primaryPink text-4xl font-medium text-center mb-5">
            คุณอาจสนใจ
          </h2>
          <div className="flex justify-around items-center">
            {/* buutton links */}
            <ButtonLink
              text={buttonLinks.addingPoints.text}
              path={buttonLinks.addingPoints.path}
            />
            <ButtonLink
              text={buttonLinks.myClothes.text}
              path={buttonLinks.myClothes.path}
            />
            <ButtonLink
              text={buttonLinks.repair.text}
              path={buttonLinks.repair.path}
            />
            <ButtonLink
              text={buttonLinks.myShop.text}
              path={buttonLinks.myShop.path}
            />
          </div>
        </header>

        <div className="grid grid-cols-5 mt-14">
          <div className="inline bg-flamingoPink col-span-2 h-3"></div>
          <div className="inline bg-primaryYellow col-span-3 h-3"> </div>
        </div>

        <div className="mt-4 text-white text-center py-16 bg-littleDarkPink">
          <p className="text-3xl font-semibold mb-3">
            มองหาเสื้อผ้าสไตล์ที่ใช่
          </p>
          <p className="text-xl font-semibold">ให้เราช่วยดูแลเสื้อผ้าของคุณ</p>
        </div>

        {/* Recommendation */}
        <article>
          <h2 className="text-primaryPink text-4xl font-medium">
            แนะนำสำหรับคุณ
          </h2>
          <div className="w-40 h-40 bg-primaryYellow"></div>
        </article>

        {/* Popular */}
        <article>
          <h2 className="text-primaryPink text-4xl font-medium">
            กำลังเป็นที่นิยม
          </h2>
          <div className="w-40 h-40 bg-primaryYellow"></div>
        </article>

        {/* Promotion */}
        <article>
          <h2 className="text-primaryPink text-4xl font-medium">
            โปรโมชั่นแนะนำ
          </h2>
          <div className="w-40 h-40 bg-primaryYellow"></div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
