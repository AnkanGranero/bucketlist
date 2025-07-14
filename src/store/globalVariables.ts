import { stringRef } from "../models/types"
import { Dream,ThemeMap } from "../models/types";

export const userName: stringRef = { value: "" }



export const themes:ThemeMap = {
    teknik: "teknikdrömmar",
    vardag: "vardagsdrömmar",
    hus: "husdrömmar",
    sport: "sportdrömmar",
    res: "resdrömmar"
}

export const dreams: Dream[] = [{
    id: 1,
    name: "Lära mig HTML/CSS",
    theme: "teknikdrömmar",
    checked: true
},
{
    id: 2,
    name: "Lära mig TypeScript",
    theme: "teknikdrömmar",
    checked: false
},
{
    id: 3,
    name: "En dröm som tar flera rader lorem ipsum",
    theme: "vardagsdrömmar",
    checked: false
}
]