interface CalWindow extends Window {
  Cal?: {
    (command: string, options: any): void;
    q?: any[];
    ns?: Record<string, unknown>;
    namespace: (config: Record<string, unknown>) => void;
  }
}

declare let window: CalWindow;