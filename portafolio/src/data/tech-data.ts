import { backendData } from "./backend-data";
import { desktopData } from "./desktop-data";
import { devopsData } from "./devops-data";
import { frontendData } from "./frontend-data";
import { gitData } from "./git-data";
import { iotData } from "./iot-data";
import { mobileData } from "./mobile-data";
import { pythonData } from "./python-data";
import { sqlData } from "./sql-data";
import { toolsData } from "./tools-data";

// Define la estructura para que TypeScript te ayude con el autocompletado
interface StackItem {
  name: string;
  img: string;
  type: string;
}

interface Technology {
  id: string;
  name: string;
  logo: string;
  theme: string;
  stack: StackItem[];
}

export const allTechs: Technology[] = [
  pythonData,
  sqlData,
  frontendData,
  backendData,
  desktopData,
  devopsData,
  mobileData,
  // iotData,
  gitData,
  toolsData,
];
