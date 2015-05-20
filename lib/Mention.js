var React = require('react');
var emptyFunction = require('react/lib/emptyFunction');
var utils = require('./utils');




module.exports = React.createClass({

  displayName: 'Mention',

  propTypes: {
    /**
     * Called when a new mention is added in the input
     *
     * Example:
     *
     * ```js
     * function(suggestion) {
     *   console.log("user " + suggestion.display + " was mentioned!");
     * }
     * ```
     */
    onAdd: React.PropTypes.func,

    /**
     * Called when a new mention is about to be added and offers
     * ability for suggestion modification before it's added.
     */
    onBeforeAdd: React.PropTypes.func,

    renderSuggestion: React.PropTypes.func,

  },

  getDefaultProps: function () {
    return {
      trigger: "@",
      onAdd: emptyFunction,
      onBeforeAdd: emptyFunction,
      onRemove: emptyFunction,
      renderSuggestion: null
    };
  },

  render: function() {
    return (
      React.createElement("strong", null,  this.props.display)
    );
  }

});
