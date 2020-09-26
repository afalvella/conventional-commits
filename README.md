# Conventional commits

## Releases  

### Changelog

- To generate your changelog before your first release, simply do:  
`npm run release -- --first-release`
- commit that change before your first release.

### Starting a new release

- Use the `git flow release start <version>` to start a release.
- Within this branch, you should then run `npm run release` to increment the version number within.
- Finish your release running `git flow release finish <version>`. 