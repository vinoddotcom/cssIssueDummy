import { getWorkerInstance } from '@/helper/workerGenerator';


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hooks.hookOnce("app:mounted", () => {
        console.log("finished called");
        getWorkerInstance().postMessage([156, 5662]);
        
        getWorkerInstance().onmessage = (e: any) => {
            console.log(e.data);
            console.log('Message received from worker');
        }
  });
})
  