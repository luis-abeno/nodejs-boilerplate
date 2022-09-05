import "dotenv/config";
import express from "express";
import Router from "./routes";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import Helmet from "helmet";
import morgan from "morgan";

class App {
  public app: express.Application;
  public port: string | undefined = process.env.API_PORT;
  public env: string | undefined = process.env.API_ENV;

  constructor() {
    this.app = express();
    // this.setupDb();
    this.startAPI();
  }

  private startAPI(): void {
    /// Check if a port and environment are provided by env file
    if (!this.port || !this.env) {
      console.error("Please provide PORT and ENV variables");
      return;
    }

    var allowedOrigins = [""];
    if (this.env !== "production") {
      /// For development or staging environments all origins are allowed
      allowedOrigins = [""];
    } else {
      if (process.env.API_FRONT_END_URLS) {
        allowedOrigins = [process.env.API_FRONT_END_URLS];
      } else {
        console.warn("No Urls provided to allow requests");
      }
    }

    const corsOptions: cors.CorsOptions = {
      origin: allowedOrigins,
    };

    this.app.use(
      Helmet({
        crossOriginEmbedderPolicy: false,
        crossOriginResourcePolicy: false,
      })
    );

    this.app.use(express.json());
    this.app.use(morgan("tiny"));
    this.app.use(express.static("public"));
    this.app.use(cors(corsOptions));

    if (this.env !== "production") {
      this.app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(undefined, {
          swaggerOptions: {
            url: "/swagger.json",
          },
        })
      );
    }

    this.app.use(Router);

    this.app.listen(this.port, () => {
      console.log("Server is running on port", this.port);
    });
  }

  // private setupDb(): void {
  //   const mongo: string = process.env.DB_MONGO_CONNECTION_STRING || "";

  //   mongoose
  //     .connect(mongo)
  //     .then(() => {
  //       console.log("Connected to MongoDB");
  //     })
  //     .catch((e: MongoError) => {
  //       console.warn("Error connecting to MongoDB", e);
  //       return new Error("Problem to connect database");
  //     });
  // }
}

new App();
