// src/locomotive-scroll.d.ts or root/locomotive-scroll.d.ts
declare module "locomotive-scroll" {
  interface ILocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    // Other properties of LocomotiveScroll can be added here if needed
  }

  export default class LocomotiveScroll {
    constructor(options: ILocomotiveScrollOptions);
    scrollTo(target: string | HTMLElement): void;
    destroy(): void;
    // Add other methods if necessary
  }
}
