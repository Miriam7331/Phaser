import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.add.image(512, 384, "background");

    this.add.image(512, 300, "logo");

    this.add
      .text(512, 450, "Welcome to Miriam's Game!", {
        fontFamily: "Verdana",
        fontSize: 48,
        color: "#ffcc00",
        stroke: "#000000",
        strokeThickness: 6,
        align: "center",
      })
      .setOrigin(0.5);

    const playButton = this.add
      .text(512, 550, "Click to Play", {
        fontFamily: "Tahoma",
        fontSize: 32,
        color: "#00ff00",
        stroke: "#000000",
        strokeThickness: 4,
        align: "center",
      })
      .setOrigin(0.5)
      .setInteractive();

    playButton.on("pointerover", () => {
      playButton.setStyle({ color: "#ff0000" });
    });

    playButton.on("pointerout", () => {
      playButton.setStyle({ color: "#00ff00" });
    });

    playButton.on("pointerdown", () => {
      this.scene.start("Game");
    });

    this.tweens.add({
      targets: playButton,
      y: 530,
      ease: "Power1",
      duration: 500,
      yoyo: true,
      repeat: -1,
    });
  }
}
