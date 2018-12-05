/**
  * Mail adapter
  * @namespace adapter
  * @prop {object} info
  * @prop {object} input
  * @prop {object} output
  */
module.exports = {
  /**
    * Descriptive information about adapter
    * @namespace info
    * @prop {String} name - Name of adapter used as context for bot
    */
  info: {
    name: 'mail'
  },
  /**
    * Input configuration
    * @namespace input
    */
  input: {
    /**
      * Computer vision algorithms
      */
    cva: {support: false}
    /**
      * Natural language understanding
      */
    nlu: {support: true, native: false}
    /**
      * Speech recognition layer
      */
    srl: {support: false},
  },
  /**
    * Output configuration
    * @namespace output
    * @param {String} format - File format for outputting content
    * @param {String} target - Type of client that handles response
    */
  output: {
    format: 'html', // HTML
    target: 'mailbox' // Mail clients
  }
};
