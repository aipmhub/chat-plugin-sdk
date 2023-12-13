export const LOBE_PLUGIN_SETTINGS = 'X-Lobe-Plugin-Settings';

export const getPluginSettingsFromRequest = <T = any>(req: Request): T | undefined => {
  const settings = req.headers.get(LOBE_PLUGIN_SETTINGS);
  if (!settings) return;

  try {
    return JSON.parse(settings);
  } catch {
    return settings as any;
  }
};

export const getPluginSettingsFromHeaders = <T = any>(headers: HeadersInit): T | undefined => {
  const header = new Headers(headers as any);

  const settings = header.get(LOBE_PLUGIN_SETTINGS);
  if (!settings) return;

  try {
    return JSON.parse(settings);
  } catch {
    return settings as any;
  }
};

export const createHeadersWithPluginSettings = (
  settings: any,
  header?: HeadersInit,
): HeadersInit => ({
  ...header,
  [LOBE_PLUGIN_SETTINGS]: typeof settings === 'string' ? settings : JSON.stringify(settings),
});
