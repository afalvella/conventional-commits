# Conventional commits

## Releases  

### First release

- To generate your changelog for your first release, simply do:  
`npm run release -- --first-release`

### Starting a new release

- Use the `git flow release start <version>` to start a release.
- Within this branch, you should then run `npm run release` to increment the version number within.
- Finish your release running `git flow release finish <version>`. 