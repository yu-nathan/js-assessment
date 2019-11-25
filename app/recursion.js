recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    // array to keep track of which directories we are currently under
    let directories = [];
    let result = [];

    const dirProcessor = (dir) => {
      directories.push(dir.dirName);
      dir.files.forEach(file => {
        if (!dirName || directories.indexOf(dirName) != -1) {
          result.push(file);
        }
      });
      dir.subDirs.forEach(subDir => dirProcessor(subDir));
      directories.pop();
    };

    dirProcessor(data);
    return result;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    // dynamic programming approach
    let fibArray = [0, 1];
    if (n <= 1) {
      return fibArray[n];
    }
    for (let i = 2; i <= n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    return fibArray[n];
  },
};
