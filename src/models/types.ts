export type Dream = {
    id: number,
    name: string,
    theme: string,
    checked: boolean
}
export type newDream = Omit<Dream, "id">;

export type stringRef = {
    value: string
}

export type ValueElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type Theme = { id: number; name: string };