import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import { Bugfender } from "@bugfender/sdk";

Bugfender.init({
  appKey: "SoHKtZoMH1iH0QrexTxckhBoAF2WLp9K",
  overrideConsoleMethods: false,
  printToConsole: true,
  logBrowserEvents: false,
  //enableUIEventLogging: true,
  //registerErrorHandler: true,
});
Bugfender.info("Bugfender inicializado correctamente.");

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#028af8",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Boot, Preloader, MainMenu, Game, GameOver],
};

export default new Phaser.Game(config);
