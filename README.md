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

NOTE: You need to ensure that nothing exists on the specified file path, otherwise, you will be reported with an error:
```
[Error: SQLITE_ERROR: output file already exists] {
  errno: 1,
  code: 'SQLITE_ERROR'
}
```
