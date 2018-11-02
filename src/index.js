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
    * @prop {String} detector - Library used to detect intent of msg
    * @prop {String} parser - Library used to parse information from msg
    */
  input: {
    detector: 'eduir', // Educated intent recogniser
    parser: 'intent-desire' // BDI reverse lookup
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
