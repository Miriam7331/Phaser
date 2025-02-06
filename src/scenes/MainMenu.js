import { Bugfender } from "@bugfender/sdk";
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

    // Botón para generar errores
    const errorButton = this.add
      .text(512, 600, "Generar Error", {
        fontFamily: "Tahoma",
        fontSize: 32,
        color: "#ff0000",
        stroke: "#000000",
        strokeThickness: 4,
        align: "center",
      })
      .setOrigin(0.5)
      .setInteractive();

    errorButton.on("pointerdown", () => {
      try {
        throw new Error("Este es un error de prueba.");
      } catch (error) {
        Bugfender.error("Se generó un error de prueba:", error);
        Bugfender.info("Se generó un error de prueba:", error);
      }
    });

    this.tweens.add({
      targets: playButton,
      y: 530,
      ease: "Power1",
      duration: 500,
      yoyo: true,
      repeat: -1,
    });
    this.obtenerDatosBicicletas();
  }
  obtenerDatosBicicletas() {
    fetch("https://myapp-12p0.onrender.com/api/bicicletas")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error en la solicitud");
        }
        return respuesta.json();
      })
      .then((datos) => {
        console.log("Datos de bicicletas:", datos);
        Bugfender.info("Datos de bicicletas cargados:", datos);

        if (Array.isArray(datos)) {
          datos.forEach((bicicleta, index) => {
            this.add.text(100, 100 + index * 30, bicicleta.nombre, {
              fontFamily: "Arial",
              fontSize: 24,
              color: "#ffffff",
            });
          });
        }
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los datos:", error);
      });
  }
}
