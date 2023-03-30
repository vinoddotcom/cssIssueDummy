// vite-env.d.ts
interface ImportMeta {
    // Define custom properties here if needed
  }
  
  interface UserConfig {
    // Extend UserConfig interface to include module configuration
    module?: {
      rules?: {
        test: RegExp;
        use: string[];
      }[];
    };
  }
  