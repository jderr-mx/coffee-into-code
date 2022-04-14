empress-blog-coffee-into-code-template
==============================================================================

Empress theme for my site www.coffeeintocode.com

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------
```
ember install empress-blog-coffee-into-code-template
```


Layout
------------------------------------------------------------------------------
The styling uses TailwindCSS, I was not able to make Tailwind work as a dependency of the addon. 
It currently needs to be installed as a dependency of your empress site. 
for install instructions see [Ember section from the Tailwind docs](https://tailwindcss.com/docs/installation/#ember-js) 

If you are doing local layout development the styling does not show up in the dummy app.
You will need to link this addon locally and use your empress site:

All credit to the Ember Guides [Writing Addons]('https://cli.emberjs.com/release/writing-addons/intro-tutorial/') tutorial for the link instructions!

From the addon directory:
1. run `npm install` or `yarn install` if you haven't already 
2. run `npm link` or `yarn link` - I have not had luck with using `yarn link` so I have always used npm's version

From the your empress site's directory:
1. run `npm link empress-blog-coffee-into-code-template`
2. In your empress site's package.json add an entry for: `"empress-blog-coffee-into-code-template": "*"` in `devDependencies`
3. Run `yarn install` or `npm install` 
If using npm (for first time use npm install --prefer-offline or else npm install --offline instead of npm install.

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
