// src/global.d.ts
declare module "*.glb";
declare module "*.png";
declare module "lenis/react" {
  import { ComponentType, ReactNode } from 'react';
  
  interface ReactLenisProps {
    children?: ReactNode;
    root?: boolean;
    options?: any;
    autoRaf?: boolean;
    rafPriority?: number;
    className?: string;
  }
  
  export const ReactLenis: ComponentType<ReactLenisProps>;
}

declare module 'three/tsl' {
  export * from 'three';
}

// MeshLine types
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

export {};