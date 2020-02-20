function test(api) {
    console.log('Initializer JS code in discourse-theme-settings');
}

export default {
    name: 'test-initializer-js',
    initialize() {
      withPluginApi("0.8", api => {
          test(api);
      });
    }
}
