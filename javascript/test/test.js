require('../lib/polyglote-code')
const tap = require('tap')

tap.test('Print functions', function (t) {
  Console.Write('C# / F# / VB.NET\n')
  fmt.printf('Go\n')
  putStr('Haskell\n')
  io.write('Lua\n')
  t.end()
})

tap.test('Print with new line', function (t) {
  trace('ActionScript')
  Console.WriteLine('C# / F# / VB.NET')
  print('Dart')
  fmt.println('Go')
  putStrLn('Haskell')
  System.out.println('Java')
  println('Kotlin')
  println('Processing')
  print('Python')
  t.end()
})