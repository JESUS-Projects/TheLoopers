import React from "react";
import Link from "next/link";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

export default function Navbar() {
  return (
    
    <nav className="flex justify-between bg-primaryPink text-xl mb-6 text-white">
        <div className="flex justify-betweenmx-2 items-center my-6 mx-2">
          <Link href="/"><a className="mx-4">theLoopers</a></Link>
          <Link href="/"><a className="mx-4" >Language</a></Link>
        </div>
        
        <div className="flex justify-between mx-2 items-center">
          <Link href="/"><a className="px-4 content-center" >My point : 0</a></Link>
          
          <Link href="/">
            <div className="mx-4 mt-1"><ChatOutlinedIcon sx={{ fontSize: 35 }} /></div>
          </Link>
          
          <Link href="/">
            <div className="mx-4 mb-1"><ShoppingBasketOutlinedIcon sx={{ fontSize: 35 }} /></div>
          </Link>

          <div className="flex justify-between items-center mx-4 ">
            <Link href="/">
              <div className=""><AccountCircleOutlinedIcon sx={{ fontSize: 35 }}/></div>
            </Link>
            <Link href="/"><a className="mx-2">Userxxx</a></Link>
          </div>
          
        </div>
    </nav>
  
  );
}
