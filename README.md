# Try it out!
Install dependencies with
```
npm install
```
Then, run with
```
npm start
```
By default, the location of a database file is `C:\temp\db`. If you need to change the location, edit the `filepath` global variable in the `main.ts` file.

NOTE: You need to ensure that nothing exists of the specified file path, otherwise, the SQLite library used in the code is not going to overwrite a file, but rather report an error:
```
[Error: SQLITE_ERROR: output file already exists] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
```
