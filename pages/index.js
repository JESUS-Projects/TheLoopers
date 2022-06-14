import React, { useState, useEffect } from "react";

import Login from "../components/common/Login";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MainSearchBox from "../components/MainSearchBox";
import ButtonLink from "../components/common/ButtonLink";
import FilterSearchBox from "../components/FilterSearchBox";
import Link from "next/link";
import { IconButton, Tooltip, Button } from "@mui/material";

// icons
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//just for replacing filter as a square icon
import SquareSharpIcon from "@mui/icons-material/SquareSharp";

/**
 * There are 17 filter in total.
 * all, top, buttom, skirtm dress, hoodie, high-heels, shoes,
 * hat, accessories, male, female, size s, size, m, size l, size xl
 */

const filterOptions = {
  all: "all",
  clothes: {
    shirt: "clothes_shirt",
    pants: "clothes_pants",
    skirt: "clothes_skirt",
    dress: "clothes_dress",
    hoodie: "clothes_hoodie",
    highHeels: "clothes_highHeels",
    shoes: "clothes_shoes",
  },
  accessories: {
    hat: "accessories_hat",
    general: "accessories_general",
  },
  gender: {
    female: "female",
    male: "male",
  },
  size: {
    S: "size_S",
    M: "size_M",
    L: "size_L",
    XL: "size_XL",
    FREESIZE: "size_FREESIZE",
  },
};

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

// There are 2 types, text icon, and image icon.
const filterButtons = [
  { text: "all", option: filterOptions.all },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.shirt,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.pants,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.skirt,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.dress,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.hoodie,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.highHeels,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.clothes.shoes,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.accessories.hat,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.accessories.general,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.gender.female,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.gender.male,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.size.S,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.size.M,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.size.L,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.size.XL,
  },
  {
    icon: <SquareSharpIcon sx={{ fontSize: 45 }} />,
    option: filterOptions.size.FREESIZE,
  },
];

export default function Home() {
  const [filter, setFilter] = useState(filterOptions.all);

  const filterButtonsJSX = filterButtons.map((info) => {
    if (info.text) {
      return (
        <Button
          variant="contained"
          className="text-white bg-littleDarkPink"
          onClick={(e) => {
            setFilter(info.option);
          }}
        >
          <span className="uppercase text-2xl">{info.text}</span>
        </Button>
      );
    }
    if (info.icon) {
      return (
        <Button
          variant="contained"
          className="text-white flex bg-littleDarkPink"
          onClick={(e) => {
            setFilter(info.option);
          }}
        >
          {info.icon}
        </Button>
      );
    }
  });

  const allContents = (
    <section>
      {/* filter */}
      <div className="flex justify-center items-center my-8">
        <div className="flex justify-around items-start">
          <p className=" text-amaranthPink text-3xl w-30 mr-2">Filter :</p>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-3 mx-3">
            {filterButtonsJSX}
          </div>
          <FilterSearchBox />
        </div>
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
    </section>
  );

  const contents = allContents;

  return (
    <div>
      <Navbar />

      <main>
        <section>
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
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-28 md:flex-row justify-around max-w-5xl">
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
          </div>

          <div className="grid grid-cols-5 mt-10 mb-4">
            <div className="inline bg-flamingoPink col-span-2 h-3"></div>
            <div className="inline bg-primaryYellow col-span-3 h-3"> </div>
          </div>

          <div className="text-white text-center h-72 py-16 mb-8 bg-littleDarkPink">
            <p className="text-4xl font-semibold mt-8 mb-3">
              มองหาเสื้อผ้าสไตล์ที่ใช่
            </p>
            <p className="text-2xl font-semibold">
              ให้เราช่วยดูแลเสื้อผ้าของคุณ
            </p>
          </div>
        </section>

        {contents}
      </main>
      <Footer />
    </div>
  );
}
