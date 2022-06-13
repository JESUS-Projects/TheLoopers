import React from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MainSearchBox from "../components/common/MainSearchBox";
import ButtonLink from "../components/common/ButtonLink";
import FilterSearchBox from "../components/common/FilterSearchBox";
import Link from "next/link";
import { IconButton, Tooltip } from "@mui/material";

// icons
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//just for replacing filter as a square icon
import SquareSharpIcon from "@mui/icons-material/SquareSharp";

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
          <div className="flex justify-between items-center mx-6 mb-8 text-primaryPink">
            <Tooltip title="Help">
              <IconButton className="text-primaryPink">
                <Link href="#">
                  <QuestionMarkIcon sx={{ fontSize: 45 }} />
                </Link>
              </IconButton>
            </Tooltip>
            <MainSearchBox />
            <Link href="#">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 45 }} />
            </Link>
          </div>

          <h2 className="text-primaryPink text-4xl text-center mb-8">
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

        <div className="grid grid-cols-5 mt-10 mb-4">
          <div className="inline bg-flamingoPink col-span-2 h-3"></div>
          <div className="inline bg-primaryYellow col-span-3 h-3"> </div>
        </div>

        <div className="text-white text-center h-72 py-16 mb-8 bg-littleDarkPink">
          <p className="text-4xl font-semibold mt-8 mb-3">
            มองหาเสื้อผ้าสไตล์ที่ใช่
          </p>
          <p className="text-2xl font-semibold">ให้เราช่วยดูแลเสื้อผ้าของคุณ</p>
        </div>

        {/* filter */}
        <div className=" mx-40 my-8 flex justify-around items-center">
          <p className=" text-amaranthPink text-3xl w-30 mr-2">Filter :</p>

          <div className="  flex">
            <IconButton className="text-flamingoPink flex justify-around space-x-2 mr-8">
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
              <Link href="#">
                <SquareSharpIcon sx={{ fontSize: 70 }} />
              </Link>
            </IconButton>
          </div>
          <FilterSearchBox />
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
