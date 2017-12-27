module.exports = {
  context: {
    succeed: response => {
      console.log('context.succeed: ' + response);
    },
    done: response => {
      console.log('context.done: ' + response);
    },
    fail: error => {
      console.log('context.fail: ' + error);
    }
  }
};
