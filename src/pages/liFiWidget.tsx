import { LiFiWidget, WidgetConfig } from '@lifi/widget';

const widgetConfig: WidgetConfig = {
  integrator: 'Lifi Integration',
  containerStyle: {
    border: '1px solid rgb(0, 0, 0)',
    borderRadius: '4px',
  },
  variant: 'expandable',
};

/**
 * LiFi Widget Page UI
 * @returns {LiFiWidget}
 */
export const LiFiWidgetPage = () => {
  return (<LiFiWidget config={widgetConfig} />)
};