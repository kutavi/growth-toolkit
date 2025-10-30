const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '../src/assets');
const outputDir = assetsDir;

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  const allFiles = fs.readdirSync(assetsDir);
  const imageFiles = allFiles.filter(file =>
    file.toLowerCase().match(/\.(png|jpe?g)$/)
  );

  if (imageFiles.length === 0) {
    console.log('⚠️  No PNG or JPEG files found in assets directory');
    return;
  }

  console.log(`Found ${imageFiles.length} image file(s) to optimize\n`);

  let totalOriginalSize = 0;
  let totalWebpSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(assetsDir, file);
    const webpPath = path.join(outputDir, file.replace(/\.(png|jpe?g)$/i, '.webp'));

    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);
    totalOriginalSize += inputStats.size;

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      const outputStats = fs.statSync(webpPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const savedKB = ((inputStats.size - outputStats.size) / 1024).toFixed(2);
      const savedPercent = (
        ((inputStats.size - outputStats.size) / inputStats.size) * 100
      ).toFixed(1);

      totalWebpSize += outputStats.size;

      console.log(`✅ ${file}`);
      console.log(`   Original: ${inputSizeKB} KB → WebP: ${outputSizeKB} KB`);
      console.log(`   Saved: ${savedPercent}% (${savedKB} KB)\n`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }

  const totalSavedKB = ((totalOriginalSize - totalWebpSize) / 1024).toFixed(2);
  const totalSavedPercent = (
    ((totalOriginalSize - totalWebpSize) / totalOriginalSize) * 100
  ).toFixed(1);

  console.log('─'.repeat(70));
  console.log('📊 Summary:');
  console.log(`   Total original size: ${(totalOriginalSize / 1024).toFixed(2)} KB`);
  console.log(`   Total WebP size: ${(totalWebpSize / 1024).toFixed(2)} KB`);
  console.log(`   Total saved: ${totalSavedKB} KB (${totalSavedPercent}%)\n`);

  console.log('✨ Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. WebP files created alongside originals in src/assets/');
  console.log('2. Originals kept as fallback for older browsers');
  console.log('3. Modern browsers will automatically use WebP (smaller files)');
  console.log('4. Run "npm run build" to see the results');
}

optimizeImages().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
