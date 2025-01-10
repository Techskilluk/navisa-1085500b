interface Window {
  Cal?: {
    (command: string, options: any): void;
    q?: any[];
    ns?: Record<string, unknown>;
  }
}