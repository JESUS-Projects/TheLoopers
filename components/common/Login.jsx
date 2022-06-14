import React from "react";

export default function Login() {
    return(
        <form>
        <div className="form-inner">
            <div>
            <h2>เข้าสู่ระบบ</h2>
            </div>
            <div>
            <h2>The Loopers</h2>
            </div>
           
            
            <div className="form-group">
            <label htmlFor="email">ชื่อผู้ใช้งาน/อีเมล</label>
            <div>  
              <input type="email" name="email" id="email" placeholder="| ระบุชื่อผู้ใช้" />
            </div>
            </div>
            <div className="form-group">
            <label htmlFor="password">รหัสผ่าน</label>
              <div>
              <input type="password" name="password" id="password" placeholder="| ระบุรหัสผ่าน"/>
              </div>
            </div>
        </div>
    </form>

    );
}