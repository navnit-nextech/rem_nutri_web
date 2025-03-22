// Add type declarations for libraries with missing types
declare module 'googleapis' {
  // Add flexible type for google.sheets to allow any auth type
  namespace google {
    function sheets(options: { version: string; auth: any }): any;
  }
}

// Additional type declarations to help with deployment build
declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_CLIENT_EMAIL: string;
    GOOGLE_PRIVATE_KEY: string;
    GOOGLE_SHEET_ID: string;
    EMAIL_USER: string;
    EMAIL_PASSWORD: string;
  }
} 