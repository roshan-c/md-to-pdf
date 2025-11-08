import type { marked } from 'marked';

declare module 'marked' {
	// Re-export the MarkedExtension type so dependencies can import it directly.
	// The existing @types/marked exposes this type only via the namespace.
	export type MarkedExtension = marked.MarkedExtension;
}

