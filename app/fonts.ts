import localFont from "next/font/local";

export const generalSans = localFont({
    src:[
        {path:"./_fonts/GeneralSans-Light.otf", weight:"200", style:"normal"},
        {path:"./_fonts/GeneralSans-Regular.otf", weight:"400", style: "normal"},
        {path:"./_fonts/GeneralSans-Semibold.otf", weight:"700", style:"normal"}
    ],
    display:"swap",
    variable:"--font-general-sans"
})