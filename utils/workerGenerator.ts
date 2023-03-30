import { wrap, Remote } from 'comlink';

// refer https://vitejs.dev/guide/features.html#web-workers
// @ts-ignore
import MainWorker from './worker?worker';

let workerAPI: null | Remote<any> = null;

/**
 * Initializes the worker module and returns it's instance
 *
 * @returns {Remote<workerAPIType>} worker instance
 */
export function getWorkerInstance(): any {
  if (!workerAPI) workerAPI = new MainWorker();
  return workerAPI;
}
