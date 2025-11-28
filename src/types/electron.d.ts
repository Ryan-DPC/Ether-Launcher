// TypeScript definitions for Electron API exposed via preload

export interface ElectronAPI {
    // Folder picker
    selectFolder: () => Promise<string | null>;

    // App info
    getVersion: () => Promise<string>;
    getPath: (name: string) => Promise<string>;
    isElectron: () => Promise<boolean>;

    // Installation
    installGame: (
        zipUrl: string,
        installPath: string,
        gameFolderName: string,
        gameId: string,
        gameName: string
    ) => Promise<{ success: boolean; message: string }>;
    getInstallStatus: (gameId: string) => Promise<{ status: string }>;
    cancelInstall: (gameId: string) => Promise<{ success: boolean; error?: string }>;
    checkGameInstalled: (installPath: string, gameFolderName: string) => Promise<boolean>;
    uninstallGame: (installPath: string, gameFolderName: string) => Promise<{ success: boolean }>;

    closeGame: (gameId: string) => Promise<{ success: boolean; message: string }>;

    // Platform info
    platform: string;
    isDevelopment: boolean;
}

declare global {
    interface Window {
        electronAPI?: ElectronAPI;
    }
}

export { };
