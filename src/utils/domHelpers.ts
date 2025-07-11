// Nullkontroll

import { stringRef } from "../models/types";

export function elementNullCheck<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`${selector} not found.`);
  return el;
}

export function bindInputToVar(input: HTMLInputElement, target: stringRef): void {
    input.addEventListener("change", (): void => {
        target.value = input.value;
    })
}