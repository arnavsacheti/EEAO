# EEAO

Social Implications of Computing Group Project

Link to [website](https://arnavsacheti.github.io/EEAO/)

# Baking the Site using BUN

Install nvm using:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Copy the export command at the end and run that, then verify the install using the below commands

```bash
nvm install 20
node -v # should print `v20.12.1`
npm -v # should print `10.5.0`
```

For more info use the build instructions following this ['node build using package manager'](https://nodejs.org/en/download/package-manager)

Finally we can install bun globally using npm `npm install -g bun`. Now you can cd to home dir of this repo and download package files using `bun i`. To live test the website run `bun run dev`; or view a production preview using `bun run build` and then `bun run preview`.

## Baking testing

Has been tested on:

- Ubuntu 22.04 (arnavsacheti 4/8/2024)

## Baking ERRATA

### esbuild fails to build

Bun is likely not isntalled globally, or was installed using `sudo apt install bun-js` or similar cmd. To fix locate bun locations using `whereis bun`, and `rm -rf <bun install dir>`. Finally reinstall globally using `npm install -g bun`.
