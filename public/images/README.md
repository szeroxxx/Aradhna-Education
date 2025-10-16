# Image Assets Guide

## Required Images

### Hero Section
**File**: `hero-counselor.webp`
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Format**: WebP (optimized)
- **Content**: Smiling counselor on a video call, professional setting
- **Alt text**: "Aradhana counselor providing admission guidance"

### Who We Are Section
**File**: `founder-portrait.webp`
- **Dimensions**: 600x600px (1:1 aspect ratio)
- **Format**: WebP (optimized)
- **Content**: Founder/chief counselor professional portrait
- **Alt text**: "Aradhana founder and chief counselor"

### College Logos
**Directory**: `college-logos/`
- **Format**: PNG or WebP with transparency
- **Dimensions**: Max 200x100px
- **Content**: Partner college/university logos
- **Files needed**:
  - `gu.png` - Gujarat University
  - `gmers.png` - GMERS Medical College
  - `parul.png` - Parul University
  - `karnavati.png` - Karnavati University
  - `nirma.png` - Nirma University
  - `au.png` - Ahmedabad University

## Image Optimization Tips

### Using WebP Format
```bash
# Convert JPG/PNG to WebP using cwebp
cwebp -q 80 input.jpg -o output.webp
```

### Online Tools
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [TinyPNG](https://tinypng.com/) - PNG/JPG compression
- [CloudConvert](https://cloudconvert.com/) - Format conversion

### Optimization Checklist
- ✅ Use WebP format for photos
- ✅ Use PNG for logos with transparency
- ✅ Compress images (target: <100KB for photos)
- ✅ Use appropriate dimensions (don't upload 4K images)
- ✅ Add descriptive filenames
- ✅ Test on mobile devices

## Placeholder Images

Currently using:
- **Avatars**: pravatar.cc (random avatars)
- **Hero counselor**: Placeholder div (needs replacement)
- **Founder portrait**: Placeholder div (needs replacement)
- **College logos**: Text placeholders (needs replacement)

## Next.js Image Component

Images are used with next/image for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/hero-counselor.webp"
  alt="Counselor on video call"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

## File Structure

```
public/images/
├── hero-counselor.webp
├── founder-portrait.webp
├── college-logos/
│   ├── gu.png
│   ├── gmers.png
│   ├── parul.png
│   ├── karnavati.png
│   ├── nirma.png
│   └── au.png
└── README.md (this file)
```

## Copyright & Licensing

Ensure you have proper rights/licenses for all images:
- ✅ Own photography
- ✅ Stock photos with commercial license
- ✅ College logos with permission
- ❌ Don't use copyrighted images without permission
