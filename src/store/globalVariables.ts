import { stringRef } from "../models/types"
import { Dream, Theme } from "../models/types";

export const username: stringRef = { value: "" }




export const themes: Theme[] = [
    { id: 1, name: "teknikdrömmar" },
    { id: 2, name: "vardagsdrömmar" },
    { id: 3, name: "husdrömmar" },
    { id: 4, name: "sportdrömmar" },
    { id: 5, name: "resdrömmar" },
]

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