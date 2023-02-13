declare module '*.svg' {
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export = ReactComponent;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export = content;
}

declare module '*.png';

declare module '*.jpg';
