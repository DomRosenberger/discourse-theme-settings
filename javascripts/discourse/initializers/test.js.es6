import { withPluginApi } from 'discourse/lib/plugin-api';

function test(api) {
    console.log('Initializer JS code in discourse-theme-settings');
    console.log(`Settings visible inside discourse-theme-settings: ${settings}`);
}

export default {
    name: 'test-initializer-js',
    initialize() {
      withPluginApi("0.8", api => {
          test(api);
      });
    }
}
