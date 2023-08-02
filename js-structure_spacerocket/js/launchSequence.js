import { countdown } from "./core/countdown.js";
import { deployPayload } from "./core/deploy.js";
import { fuel } from "./core/fuel.js";
import { liftoff } from "./core/liftoff.js";
import { loadPayload } from "./core/load.js";
import { FISHSAT, NFSAT } from "./payload/satellites.js";
// Implement the launch sequence function here and export it as the default export.
export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();

  liftoff();
  deployPayload();
}
