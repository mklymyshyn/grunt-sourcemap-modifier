module.exports = function(grunt) {

  var fs = require('fs');

  // ==========================================================================
  // TASKS
  // ==========================================================================
  // Create sourceRoot injections task
  grunt.registerMultiTask("sourcemap-modifier", 
      "SourceMap modifier to correct paths", function() {
    var data = this.data,
      files = grunt.file.expandFiles(data.files),
      base = data.base;
    
      for (var key in base) {
        var dstBase = base[key];
        for (var num in files) {
          var file = files[num];
          grunt.log.writeln("Processing soruceMap " + file + "...");

          var filedata = fs.readFileSync(file, "utf-8");
          var parsed = JSON.parse(filedata);

          for (var srcNum in parsed.sources) {
            var source = parsed.sources[srcNum];

            if (source.indexOf(key) === 0) {
              parsed.sources[srcNum] = source.replace(key, dstBase);
            }
          }

          if (typeof data.fileBase !== "undefined") {
            if (parsed.file.indexOf(data.fileBase.src) === 0) {
              parsed.file = parsed.file.replace(
                data.fileBase.src,
                data.fileBase.dst
              );
            }
          }
          fs.writeFileSync(file, JSON.stringify(parsed));
        }
      }
  });
};
