import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function MainSearchBox() {
  const [inputVal, setInputVal] = useState("");

  return (
    <form action="POST">
      <button type="submit" className="text-primaryPink">
        <SearchIcon sx={{ fontSize: 50 }}  />
      </button>
      <input
        placeholder="คุณต้องการทำอะไร"
        className="ml-2 border border-primaryPink rounded-full py-1 px-4 w-96 h-10 placeholder:text-flamingoPink"
        onChange={(e) => setInputVal(e.target.value)}
      />
    </form>
  );
}
