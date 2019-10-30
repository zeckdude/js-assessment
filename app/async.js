exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => resolve(value));
  },

  manipulateRemoteData: async function(url) {
    // Using promise
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        return data.people
          .map(person => person.name)
          .sort((a, b) => a.localeCompare(b));
      });
  }
};
