import { PrettierConfig } from './PrettierConfig';

export type Settings = {
  autoResize: boolean;
  enableEslint: boolean;
  forceRefresh: boolean;
  codeMirror: boolean;
  lineHeight: number;
  autoCompleteEnabled: boolean | undefined;
  vimMode: boolean | undefined;
  livePreviewEnabled: boolean | undefined;
  prettifyOnSaveEnabled: boolean | undefined;
  lintEnabled: boolean | undefined;
  instantPreviewEnabled: boolean | undefined;
  fontSize: number | undefined;
  fontFamily: string | undefined;
  clearConsoleEnabled: boolean | undefined;
  prettierConfig: PrettierConfig;
  autoDownloadTypes: boolean | undefined;
  newPackagerExperiment: boolean | undefined;
  zenMode: boolean | undefined;
  keybindings: any[];
  jsxBracketSameLine: boolean;
  printWidth: number;
  semi: boolean;
  singleQuote: boolean;
  tabWidth: number;
  trailingComma: string;
  useTabs: boolean;
  enableLigatures: boolean;
  customVSCodeTheme: string;
  manualCustomVSCodeTheme: string;
  experimentVSCode: boolean;
};
