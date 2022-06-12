import React from "react";
import Link from "next/link";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export default function Navbar() {
  return (
    
    <nav className="flex justify-between bg-primaryPink text-xl py-4 text-white">
        <div className="flex justify-betweenmx-2 items-center">
          <Link href="/"><a className="px-4  ">theLoopers</a></Link>
          <Link href="/"><a className="px-4 " >Language</a></Link>
        </div>
        
        <div className="flex justify-between mx-2 items-center ">
          <Link href="/"><a className="px-4 content-center" >My point : 0</a></Link>
          
          <Link href="/">
            <div className="px-4"><ChatOutlinedIcon color="white"/></div>
          </Link>
          
          <Link href="/">
            <div className="px-4"><ShoppingBasketOutlinedIcon/></div>
          </Link>

          <div className="flex justify-between px-4">
            <Link href="/">
              <div ><AccountCircleOutlinedIcon/></div>
            </Link>
            <Link href="/"><a className="px-2">Userxxx</a></Link>
          </div>
          
        </div>
    </nav>
  
  );
}
