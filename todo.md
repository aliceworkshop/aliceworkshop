# TODO

## Publish the ALICE 2026 archive

The previous edition is preserved at commit `f4be38f` on the local
`archive-2026` branch. Keeping this branch in the current repository is safe,
but it will not create a second GitHub Pages site by itself.

- [ ] Push the `archive-2026` branch to the current GitHub repository as a backup.
- [ ] Create a separate repository, such as `aliceworkshop/aliceworkshop-2026`.
- [ ] Copy the archived 2026 site from the `archive-2026` branch into the new repository's `main` branch.
- [ ] Change the archive repository's `CNAME` file to `2026.aliceworkshop.org`.
- [ ] Change `url` in the archive repository's `_config.yml` to `https://2026.aliceworkshop.org`.
- [ ] Enable GitHub Pages for the archive repository from the `main` branch and repository root.
- [ ] Add a DNS CNAME record: `2026` pointing to `aliceworkshop.github.io`.
- [ ] Wait for the TLS certificate, enable HTTPS, and verify `https://2026.aliceworkshop.org`.
- [ ] Only after the archive works, deploy the new edition to `aliceworkshop.org`.

References:

- [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
