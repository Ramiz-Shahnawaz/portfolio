// src/global.d.ts
import { MeshLineGeometry, MeshLineMaterial } from "meshline";


declare module "*.glb";
declare module "*.png";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        args?: any;
        ref?: React.Ref<MeshLineGeometry>;
      };
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        attach?: string;
        args?: any;
        ref?: React.Ref<MeshLineMaterial>;
        color?: string;
        depthTest?: boolean;
        resolution?: [number, number];
        useMap?: boolean;
        map?: any;
        repeat?: [number, number];
        lineWidth?: number;
      };
    }
  }
}

export {};