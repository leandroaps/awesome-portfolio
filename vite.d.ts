// vite.d.ts

import { ProxyOptions } from 'vite';

interface ViteConfig {
    proxy?: Record<string, string | ProxyOptions>;
}

declare module 'vite' {
    interface UserConfig extends ViteConfig {}
}
