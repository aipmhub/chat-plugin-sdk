import { PluginChannel } from './const';

export const postToFillPluginContent = (content: any) => {
  top?.postMessage({ content, type: PluginChannel.fillStandalonePluginContent }, '*');
};

export const postToUpdatePluginState = (key: string, value: any) => {
  top?.postMessage({ key, type: PluginChannel.updatePluginState, value }, '*');
};
