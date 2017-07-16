"use strict";

module.exports =
{
  hooks: {
    "page": function(page) {
      // modifies page content
      console.log('ding!', page);
      // collectStore(page, this, true);
      return page;
    }
  }
};