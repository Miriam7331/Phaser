import { Bugfender } from "@bugfender/sdk";
import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.add.image(512, 384, "background").setAlpha(0.5);

    this.add
      .text(
        512,
        384,
        "Make something fun!\nand share it with us:\nsupport@phaser.io",
        {
          fontFamily: "Arial Black",
          fontSize: 38,
          color: "#ffffff",
          stroke: "#000000",
          strokeThickness: 8,
          align: "center",
        }
      )
      .setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.start("GameOver");
      Bugfender.info("Game Over");
    });

    // Captura de error al presionar SPACE
    this.input.keyboard.on("keydown-SPACE", () => {
      try {
        let num = null;
        console.log(num.toString()); // Esto generará un error
      } catch (error) {
        Bugfender.error("Error al presionar la tecla SPACE:", error);
      }
    });
  }
}
