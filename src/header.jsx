import React from "react";
import {Search,User,ShoppingCart} from "lucide-react";
import Dropdown from "./dropdown";
import { right } from "@popperjs/core";
function Header()
{
return (<header>
<section>
<div style={{width : "50%", margin : "15px",marginLeft:"40px"}}><h1>HRR</h1></div>
<div className="hI3">
<div className="logo"
style={{marginRight: "25px"}}
>
<Search className="w-5 h-5 text-gray-600" />
<User className="w-5 h-5 text-gray-700"/>
<ShoppingCart className="w-5 h-5 text-gray-700" /></div>
</div>
</section>
<section
style={{backgroundColor : "black",
height : "50px"
}
}
>
<Dropdown/>
<Dropdown/>
</section>
</header>);
}
export default Header;