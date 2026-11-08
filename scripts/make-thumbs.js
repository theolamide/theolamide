// Makes the 200px-tall thumbnails the photo galleries use, saved under each
// gallery's thumbs/ folder with the same file name as the full-size photo.
//
//   yarn thumbs                    make thumbnails for photos that don't have one yet
//   yarn thumbs --force            remake every thumbnail
//   yarn thumbs path/to/photo.jpg  make (or remake) thumbnails for just these photos
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Keep in step with the import.meta.glob patterns in src/Components/PortfolioData.js.
const GALLERIES = ['PhotoPortfolioGallery', 'CookingGallery'].map(name => path.join(root, 'src', 'Images', name));
const THUMB_HEIGHT = 200;

const args = process.argv.slice(2);
const force = args.includes('--force');
const files = args.filter(arg => !arg.startsWith('--'));

const thumbPath = (photo) => path.join(path.dirname(photo), 'thumbs', path.basename(photo));

const galleryPhotos = (gallery) => fs.readdirSync(gallery)
    .filter(name => name.endsWith('.jpg'))
    .map(name => path.join(gallery, name));

let photos;
if (files.length) {
    photos = files.map(file => path.resolve(file));
    for (const photo of photos) {
        if (!fs.existsSync(photo)) throw new Error(`No such file: ${photo}`);
        if (!GALLERIES.includes(path.dirname(photo))) {
            throw new Error(`${path.relative(root, photo)} is not in a gallery folder (${GALLERIES.map(g => path.relative(root, g)).join(', ')})`);
        }
        if (!photo.endsWith('.jpg')) throw new Error(`${path.relative(root, photo)}: galleries only load .jpg files`);
    }
} else {
    photos = GALLERIES.flatMap(galleryPhotos).filter(photo => force || !fs.existsSync(thumbPath(photo)));
}

if (!photos.length) {
    console.log('Every photo already has a thumbnail. Use --force to remake them.');
}

for (const photo of photos) {
    const out = thumbPath(photo);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    const { width, height } = await sharp(photo)
        .rotate() // apply any EXIF orientation before resizing
        .resize({ height: THUMB_HEIGHT })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(out);
    console.log(`${path.relative(root, out)} (${width}x${height})`);
}
