import axios from "axios";
class DebugCommand {
  port: number = 8080;
  connection: string = "http://localhost:" + this.port;

  constructor(connection: string, port: number = 8080) {
    this.connection = connection + port;
  }

  post(command: string, data?: string) {
    return axios.post(this.connection + command, data);
  }

  get(command: string) {
    return axios.get(this.connection + command);
  }

  run = () => this.post("/run");
  step = () => this.post("/step");
  stepInto = () => this.post("/stepInto");
  stepOut = () => this.post("/stepOut");
  quit = () => this.post("/quit");
  execute = (data: string) => this.post("/execute", data);

  level = () => this.get("/level");
  state = () => this.get("/state");
  input = () => this.get("/input");
  inputBefore = () => this.get("/inputBefore");
  output = () => this.get("/output");
  processing = () => this.get("/processing");
  macros = () => this.get("/macros");
  userDefinedMacros = () => this.get("/userDefinedMacros");
  all = (queryParams: string) => this.get("/all?" + queryParams);
}

export default DebugCommand;
