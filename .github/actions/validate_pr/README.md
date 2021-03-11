# read-file-action

Validate whether the submitting PR author is indeed the author of the merged PR in the target repo that he claims he is.

## Usage

```yaml
steps:
  - name: Validate PR
    id: validate_pr
    uses: mmagician/validate_pr@v1
    with:
      targetRepoOwner: "w3f"
      targetRepo: "Open-Grants-Program"
      prLink: "${{ steps.grant_parser.outputs.contract_url }}"
      author: "${{ github.event.pull_request.author }}
  - name: Echo output
    run: echo ${{ steps.validate_pr.outputs.isValid }}
```

## Building

The file that eventually gets used is `dist/index.js`
After modifying the code, use `npm run build` to update the distribution.

## License

MIT
