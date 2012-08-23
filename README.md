[![build status](https://secure.travis-ci.org/joymax/grunt-sourcemap-modifier.png)](http://travis-ci.org/joymax/grunt-sourcemap-modifier)
# grunt-sourcemap-modifier

A Grunt task for [Closure Compiler Source Maps](http://code.google.com/p/closure-compiler/wiki/SourceMaps) modifications. By default **Closure Compiler** hardcode path to source and file during compilation. It's easy to solve using Makefiles but it's quite inconvenient using [Grunt](https://github.com/cowboy/grunt).


## Getting Started

First you need to have a task which care about [Closure Compiler](http://code.google.com/p/closure-compiler/). You can use [Grunt Closure Compiler task](https://github.com/manastungare/grunt-closure-compiler) or [fork by me](https://github.com/joymax/grunt-closure-compiler) with bunch of fixes.


Then register the task by adding the following line to your `grunt.js` gruntfile:

```javascript

grunt.loadNpmTasks('grunt-sourcemap-modifier');

```

Then you can minify JavaScript calling:

```javascript

grunt.initConfig({
  "sourcemap-modifier": {
    main: {
      files: [
        "build/*.map"
      ],
      base: {
        "build/": "",
        "lib/": "../lib/"
      },
      fileBase: {
        src: "build/",
        dst: ""
      }
    }
  }
});
```

### Sections

  First level sections used as group name for multiple tasks and
  its names not really matters.

  Here is list of important sections:
  
   - `files` - section should be provided with mask of sourcemap filenames
   - `base` - list of filenames map where object key is actual path built by Closure Compiler and value is target path which should appear modification
   - `fileBae` - single modifier of `file` key within source map where
      - `src` - current path prefix build by Closure Compiler
      - `dst` - destination path which should appear after modification



## License

Copyright (c) 2012 Maksym Klymyshyn

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
