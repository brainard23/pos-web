import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Input, Paper } from "@mui/material";

function Search() {
  return (
    <div>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Input className="w-100" />
    </div>
  );
}

export default Search;
