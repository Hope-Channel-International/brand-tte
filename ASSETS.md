# Assets

The brand's material is split by weight. Everything that defines the *system* is
versioned here. The media *library* lives in Google Drive, because GitHub blocks any
file over 100 MiB and asks that repositories stay under 1 GB.

## In this repository

| Path | Contents | Size |
|---|---|---|
| `assets/logos/` | 26 optimized SVGs, plus 12 unoptimized source exports under `source/` | 680 KB |
| `assets/patterns/` | `pattern-simple.svg`, `pattern-tile.svg` | 80 KB |
| `assets/fonts/` | Mona Sans variable, Space Mono regular and bold | 73 KB |
| `brand-source/imagery-system/` | `TTE_Imagery_System.docx`, `TTE_Prompt_System.html`, `tte-imagery-skill.skill` | 208 KB |
| `brand-source/zoom-backgrounds/` | 5 biome backgrounds | 8.2 MB |
| `brand-source/social/covers/` | 2 channel covers | 7.6 MB |
| `brand-source/social/avatar/` | 3 avatars | 76 KB |

## In Google Drive

**[TTE · brand-assets](https://drive.google.com/drive/folders/1v78rk09wzwMtJUagf6fTZHfizpS9rZVD)**
— inside the `HCI - ACM` shared drive, at
`00 - Admin Documents/Claude Global/TTE/brand-assets`.

| Folder | Contents | Size |
|---|---|---|
| `figma/` | `To The Ends of The Earth.fig` — the design source of truth | 509 MB |
| `brand-identity/` | `To The Ends of The Earth - Brand Identity.pdf`, 63 pages | 69 MB |
| `imagery/` | People Groups photography, raw and labeled | 372 MB |
| `social-media/` | Posts, reels, covers and avatars as published | 881 MB |

Total: 1.8 GB across 110 files. Six of them exceed GitHub's 100 MiB hard limit on their
own — the Figma file and five reels.

### The original Drive folder

The designer's own folder is
**[TEE Brand](https://drive.google.com/drive/folders/14o3Flhrc7l8VjDa0oA5qB0Zb2Kg1rcKv)**,
with these direct links:

| Item | Link |
|---|---|
| Figma file | [To The Ends of The Earth.fig](https://drive.google.com/file/d/1nS2Qu6czOmK__scK-SjwLBnNBUvxlyuo/view) |
| Brand identity PDF | [Brand Identity.pdf](https://drive.google.com/file/d/1BLg1MDVv1lGTfevlYSHXL70C5EfCGlno/view) |
| Imagery | [TEE - IMAGERY](https://drive.google.com/drive/folders/1ky_SlfDIfSQps44m07HD02FHjZEelWeK) |
| Social media | [TEE - SOCIAL MEDIA](https://drive.google.com/drive/folders/1RrkIRO3cKFvwnNvzn-qqYPY4cZYc7dHI) |
| Wordmark exports | [TEE - WORDMARK](https://drive.google.com/drive/folders/1XNtOGHJFgYLgVXmWKtCS6d8KzFcBD09p) |
| Icon exports | [TEE - ICON REGULAR](https://drive.google.com/drive/folders/1_tzihmYHzyv3IBd0t8MF2wibaMFR3dvJ) |
| Zoom backgrounds | [TEE - Zoom Backgrounds](https://drive.google.com/drive/folders/1TAirM9dCNtjJgjCmOP_eVe2M7PxdcE_b) |

`TEE - Biomes Animated` is empty in the source folder.

## Why the split

GitHub warns above 50 MiB per file, **blocks above 100 MiB**, and recommends repositories
stay under 1 GB. Git LFS would lift the per-file limit, but the Hope Channel organization
is on the free plan: 10 GB of LFS storage and 10 GB of transfer per month, after which
storage bills at $0.07/GiB and transfer at $0.0875/GiB. Pushing 1.8 GB of video through
LFS would consume the monthly transfer allowance in roughly five clones.

Keeping the system in Git and the media library in Drive costs nothing and keeps a clone
of this repository at about 19 MB.
