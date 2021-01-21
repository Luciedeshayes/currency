import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        success?: PaletteColorOptions;
        warning?: PaletteColorOptions;
        danger?: PaletteColorOptions;
        info?: PaletteColorOptions;
        edit?: PaletteColorOptions;
        colors?: any;
        spacing?: number;
    }

    interface Palette {
        success: PaletteColor;
        warning: PaletteColor;
        danger: PaletteColor;
        info: PaletteColor;
        edit: PaletteColor;
        colors: any;
        spacing: number;
    }
}
