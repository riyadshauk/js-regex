This is a simple CLI tool for executing JavaScript-syntax regex in BASH.

Be cautioned: This is a quick-and-dirty script and not extensively tested. I wrote this to solve the mundane/ordinary problem of wanting to use JavaScript RegEx while writing scripts in BASH. This solution isn't necessarily extensive or thorough but solves a common RegEx use-case for me, personally.

Here's the supported usage, as an example:
```bash
$ git clone https://github.com/riyadshauk/js-regex
$ cd js-regex
$ npm run install
$ echo "This is some text to pipe in" | js-regex -s "(t.x.)\st"
```
That last command outputs
```bash
text
```

Note that omitting the `s` flag will prefix the output with the following message, by default:
```
(If this script hangs, it is simply because you have not piped text to it. If you want to silence this message, provide the '-s' flag)

```

Feel free to open up any [Issues](https://github.com/riyadshauk/js-regex/issues) if you have recommendations or ideas to improve this. Also, feel free to fork this repo. PRs are welcome.

Peace!