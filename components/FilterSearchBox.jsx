import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function FilterSearchBox() {
  const [inputVal, setInputVal] = useState("");

  return (
    <form action="POST" className="flex justify-center items-center">
      <input
        placeholder="ค้นหาด้วยคีย์เวิร์ด"
        className="border border-primaryPink rounded-full py-1 px-4 w-44 h-12 placeholder:text-flamingoPink"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type="submit" className="text-primaryPink ml-2">
        <SearchIcon sx={{ fontSize: 50 }} />
      </button>
    </form>
  );
}
