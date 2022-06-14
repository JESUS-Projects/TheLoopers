import React from "react";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

export default function Footer() {
  return (
    <div className="flex justify-between py-6 px-44 bg-primaryPink text-xl text-white">
      <div className="flex flex-col items-center">
        <Image src={logo} width={200} height={220}/>
        <a className="text-2xl">theLoopers</a>
      </div>
      <div>
        <div className="flex flex-col mb-6">
          <a className="font-bold">theLoopers</a>
          <a>แพลทฟอร์มสำหรับแลกเปลี่ยนเสื้อผ้า</a>
          <a>ให้เสือ้ผ้าของคุณกลับมามีคุณค่าอีกครั้ง</a>
        </div>
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
