type ErrorReportOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type LovablePlatformEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: ErrorReportOptions,
  ) => void;
};

declare global {
  interface Window {
    // NOTE: this exact global name (__lovableEvents) is injected by Lovable's
    // own hosted platform to power its error-reporting/auto-fix workflow in
    // the editor. It must stay as-is even though the rest of this file has
    // been renamed to Nile Reach's own naming — renaming this property would
    // silently break that integration, since nothing else would populate it.
    __lovableEvents?: LovablePlatformEvents;
  }
}

export function reportNileReachError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
