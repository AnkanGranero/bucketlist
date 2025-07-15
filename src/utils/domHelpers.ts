// Nullkontroll

import { stringRef, ValueElement } from "../models/types";

export function elementNullCheck<T extends HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`${selector} not found.`);
  return el;
}

export function bindElementToVar(element: ValueElement, target: stringRef): void {
    element.addEventListener("change", (): void => {
        target.value = element.value.trim();
    })
}