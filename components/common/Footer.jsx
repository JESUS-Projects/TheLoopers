import React from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

export default function Footer() {
  return (
    <div className="flex justify-between py-6 px-36 bg-primaryPink text-l text-white">
      <div>
        <img src={logo}/>
        <a className="text-xl">theLoopers</a>
      </div>
      <div>
        <a>theLoopers</a>
        <div className="">
          <EmailOutlinedIcon/> 
          <a className="mx-2">theloopers_team@gmail.com</a>
        </div>

        <div className="">
          <CallOutlinedIcon/> 
          <a className="mx-2">02-123-4567</a>
        </div>

      </div>
      <div className="">
        <a className="font-bold">ติดต่อสอบถาม/ขอความช่วยเหลือ</a>
        <div>
          <Link href="/"><a>คำถามที่พบบ่อย</a></Link>
        </div>
        <div>
          <Link href="/"><a>การคืนเงิน</a></Link>
        </div>
        <div>
          <Link href="/"><a>การใช้บริการเว็บไซต์</a></Link>
        </div>
        <div>
          <Link href="/"><a>แจ้งปัญหา</a></Link>
        </div>
      </div>
    </div>
  
  );
}
